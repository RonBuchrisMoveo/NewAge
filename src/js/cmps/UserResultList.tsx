import { UserResultPreview } from 'js/cmps/UserResultPreview'
import { IUserResult } from 'js/interfaces/userResult'
import React from 'react'


export const UserResultList = (props:{result:IUserResult,userId:string}) => {
    const {result,userId} = props
    const options =Object.entries(result)
    return (
        <div className='result'>
            {options.map((option:[string,object[]],idx:number)=>{
                const optionName= option[0].toLowerCase()
                const optionDetail = option[1]
                if(!optionDetail.length) return
                    return <UserResultPreview userId={userId} optionName={optionName} activities={optionDetail} key={idx}/>
            })}   
        </div>
    )
}
