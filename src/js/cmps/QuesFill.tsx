import { FillPopUp } from 'js/cmps/FillPopUp'
import { IRootState } from 'js/interfaces/rootState.interface'
import { IUserQues } from 'js/interfaces/userQues.interface'
import { setUserQues } from 'js/store'
import React, { ChangeEventHandler, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Ques from 'data/ques.json'
import { Loader } from 'js/services/Loader'

export const QuesFill = (props: { userQues: IUserQues }) => {
    const { userQues } = props
    const dispatch = useDispatch()
    const history = useHistory()
    const quesFill = useSelector((state:IRootState) => state.data.quesFill)
    const [ques, setQues] = useState<any>(userQues)
    const [isFillPopUp, setIsFillPopUp] = useState(false)
    const currUserQues:any= {...ques}
    const RELEVANT_QUE:any=[]
    

    const handleChange=({target}:any)=>{
        const name:string = target.name
        const type:string =target.type
        const value:number = +(target.value)
        if(name==='questions'){
            checkTheQues(ques)
        }else{
            if(type==='checkbox'){
                const idx = getIdx(value,currUserQues[name])
                const arr = [...currUserQues[name]]
                if(currUserQues[name].includes(value)){
                    arr.splice(idx,1)
                }else{
                    arr.push(value)
                }
                currUserQues[name]=arr
                setQues(currUserQues)        
            }else{
                currUserQues[name]=[value]
                setQues(currUserQues)
            }
        }
    }
    const checkTheQues=(ques:IUserQues)=>{
        const allFill:boolean = isFill(ques)
        if(allFill){
            continueToResultPage(ques)
        }else {
            setIsFillPopUp(!allFill)
        }
    }

    const continueToResultPage=(ques:IUserQues)=>{
        setIsFillPopUp(false)
        dispatch(setUserQues(ques))
        history.push('/result')
    }



      const getIdx=(value:number,currQues:number[])=>{
          const idx = currQues.findIndex((que:number)=>{
              return que===value
          })
          return idx
      }

    const isFill =(ques:IUserQues)=>{
        const answers = Object.values(ques)
        const isAllFill:boolean = answers.every((answer:number[])=>{
            return answer.length
        })
        return isAllFill
    }

    return (
        <div className='questions-container'>
        <div className='all-questions'>
            <form name='questions' className="questions" onSubmit={(e)=>{
                e.preventDefault()
                handleChange(e)}}>
                    {Ques.map((que:any,idx:number)=>{
                            if(idx===5){
                                if(!currUserQues[que.name].includes(que.answers[0].value)){
                                    RELEVANT_QUE.push(6)
                                }
                                if(!currUserQues[que.name].includes(que.answers[1].value)){
                                    RELEVANT_QUE.push(7)
                                }
                                if(!currUserQues[que.name].includes(que.answers[2].value)){
                                    RELEVANT_QUE.push(8)
                                }
                                if(!currUserQues[que.name].includes(que.answers[3].value)){
                                    RELEVANT_QUE.push(10)
                                }
                            }
                        return (!RELEVANT_QUE.includes(idx)) && <div key={idx} className={`question que-${idx+1}`}>
                            <h4 className={`${que.name}`}>{que.title}</h4>
                            {que.answers.map((ans:any)=>{
                                return <p key={ans.value}><input name={que.name} type={que.type} className={`ques ques${idx+1}`} onChange={(e) => handleChange(e)} value={ans.value} checked={(ques[que.name].includes(ans.value)) ? true : false} />{ans.title}</p>
                            })}
                        </div>
                    })}
            <div className="ques-fill-action">
            <button onSubmit={handleChange}>המשך</button>`
            </div>
            </form>
            </div>
           {isFillPopUp && <FillPopUp setIsFillPopUp={setIsFillPopUp} continueToResultPage={continueToResultPage} ques={ques}/>}
        </div>
    )

}
