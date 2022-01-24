import { FillPopUp } from 'js/cmps/FillPopUp'
import { IRootState } from 'js/interfaces/rootState.interface'
import { IUserQues } from 'js/interfaces/userQues.interface'
import { setUserQues } from 'js/store'
import React, { ChangeEventHandler, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const QuesFill = (props: { userQues: IUserQues }) => {
    const { userQues } = props
    const dispatch = useDispatch()
    const history = useHistory()
    const quesFill = useSelector((state:IRootState) => state.data.quesFill)
    const [ques, setQues] = useState<IUserQues>(userQues)
    const [isFillPopUp, setIsFillPopUp] = useState(false)
    
    const handleChange=({target}:any)=>{
        let name:string = target.name
        let type:string =target.type
        const value:number = +(target.value)
        const currUserQues:any= {...ques}
        if(name==='questions'){
            checkTheQues(ques)
        }else{
            if(type==='checkbox'){
                const idx = getIdx(value,currUserQues[name])
                let arr = [...currUserQues[name]]
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
            <div className="question-1">
                <h4 className={`HowLongTime ${quesFill.includes('HowLongTime') && 'not-fill'}`}>כמה זמן פנוי תרצה/י להקצות עבור הפעילויות</h4>
                <p><input name='HowLongTime' type='radio' className='ques1' onChange={(e) => handleChange(e)} value={1} checked={(ques['HowLongTime'].includes(1)) ? true : false}  />פעם או פעמיים בחודש</p>
                <p><input name='HowLongTime' type='radio' className='ques1' onChange={(e) => handleChange(e)} value={2} checked={(ques['HowLongTime'].includes(2)) ? true : false} />פעם השבוע</p>
                <p><input name='HowLongTime' type='radio' className='ques1' onChange={(e) => handleChange(e)} value={3} checked={(ques['HowLongTime'].includes(3)) ? true : false} />פעמיים בשבוע</p>
                <p><input name='HowLongTime' type='radio' className='ques1' onChange={(e) => handleChange(e)} value={4} checked={(ques['HowLongTime'].includes(4)) ? true : false} />3 פעמים בשבוע</p>
                <p><input name='HowLongTime' type='radio' className='ques1' onChange={(e) => handleChange(e)} value={5} checked={(ques['HowLongTime'].includes(5)) ? true : false} />יותר מ 3 פעמים</p>
            </div>
            <div className="question-2">
                <h4 className={`FreeHoursDay ${quesFill.includes('FreeHoursDay') && 'not-fill'}`}>שעות פנויות ביממה</h4>
                <p><input name='FreeHoursDay' type='checkbox' className='ques2' value={7} onChange={(e) => handleChange(e)} checked={(ques['FreeHoursDay'].includes(7)) ? true : false} />שעות הבוקר</p>
                <p><input name='FreeHoursDay' type='checkbox' className='ques2' value={8} onChange={(e) => handleChange(e)} checked={(ques['FreeHoursDay'].includes(8)) ? true : false} />שעות אחה"צ</p>
                <p><input name='FreeHoursDay' type='checkbox' className='ques2' value={9} onChange={(e) => handleChange(e)} checked={(ques['FreeHoursDay'].includes(9)) ? true : false} />שעות הערב</p>
            </div>
            <div className="question-3">
                <h4 className={`WeekendActivities ${quesFill.includes('WeekendActivities') && 'not-fill'}`}>פעילויות בסופ"ש</h4>
                <p><input name='WeekendActivities' type='radio' className='ques3' value={10} onChange={(e) => handleChange(e)} checked={(ques['WeekendActivities'].includes(10)) ? true : false}  />לא מתאים</p>
                <p><input name='WeekendActivities' type='radio' className='ques3' value={11} onChange={(e) => handleChange(e)} checked={(ques['WeekendActivities'].includes(11)) ? true : false} />מתאים</p>
            </div>
            <div className="question-4">
                <h4 className={`Mobility ${quesFill.includes('Mobility') && 'not-fill'}`}>כיצד הינך מתנייד ביום יום</h4>
                <p><input name='Mobility' type='checkbox' className='ques4' onChange={(e) => handleChange(e)} value={12} checked={(ques['Mobility'].includes(12)) ? true : false} />בתחבורה ציבורית</p>
                <p><input name='Mobility' type='checkbox' className='ques4' onChange={(e) => handleChange(e)} value={13} checked={(ques['Mobility'].includes(13)) ? true : false} />ברכב</p>
                <p><input name='Mobility' type='checkbox' className='ques4' onChange={(e) => handleChange(e)} value={14} checked={(ques['Mobility'].includes(14)) ? true : false} />ברגל</p>
            </div>
            <div className="question-5">
                <h4 className={`Hobbies ${quesFill.includes('Hobbies') && 'not-fill'}`}>תחביבים שלי</h4>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={15} checked={(ques['Hobbies'].includes(15)) ? true : false} />אומנות</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={16} checked={(ques['Hobbies'].includes(16)) ? true : false} />סרטים</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={17} checked={(ques['Hobbies'].includes(17)) ? true : false} />מוסיקה</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={18} checked={(ques['Hobbies'].includes(18)) ? true : false} />טלויזיה</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={19} checked={(ques['Hobbies'].includes(19)) ? true : false} />קריאה</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={20} checked={(ques['Hobbies'].includes(20)) ? true : false} />ספורט</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={21} checked={(ques['Hobbies'].includes(21)) ? true : false} />תיירות וטיולים</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={22} checked={(ques['Hobbies'].includes(22)) ? true : false} />משחקים</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={23} checked={(ques['Hobbies'].includes(23)) ? true : false} />מכוניות ואופנועים</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={24} checked={(ques['Hobbies'].includes(24)) ? true : false} />בעלי חיים</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={25} checked={(ques['Hobbies'].includes(25)) ? true : false} />אופנה</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={26} checked={(ques['Hobbies'].includes(26)) ? true : false} />קניות</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={27} checked={(ques['Hobbies'].includes(27)) ? true : false} />בריאות ו Well Being</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={28} checked={(ques['Hobbies'].includes(28)) ? true : false} />אוכל</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={29} checked={(ques['Hobbies'].includes(29)) ? true : false} />יין ואלכוהול</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={30} checked={(ques['Hobbies'].includes(30)) ? true : false} />מדע וטכנולוגיה</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={31} checked={(ques['Hobbies'].includes(31)) ? true : false} />עסקים</p>
                <p><input name='Hobbies' type='checkbox' className='ques5' onChange={(e) => handleChange(e)} value={32} checked={(ques['Hobbies'].includes(32)) ? true : false} />אקטואליה</p>
            </div>
            <div className="question-6">
                <h4 className={`ActivityType ${quesFill.includes('ActivityType') && 'not-fill'}`}>סוג פעילות מבוקש</h4>
                <p><input name='ActivityType' type='checkbox' className='ques6' onChange={(e) => handleChange(e)} value={33} checked={(ques['ActivityType'].includes(33)) ? true : false} />עבודה בשכר</p>
                <p><input name='ActivityType' type='checkbox' className='ques6' onChange={(e) => handleChange(e)} value={34} checked={(ques['ActivityType'].includes(34)) ? true : false} />התנדבות</p>
                <p><input name='ActivityType' type='checkbox' className='ques6' onChange={(e) => handleChange(e)} value={35} checked={(ques['ActivityType'].includes(35)) ? true : false} />פעילות פנאי</p>
                <p><input name='ActivityType' type='checkbox' className='ques6' onChange={(e) => handleChange(e)} value={36} checked={(ques['ActivityType'].includes(36)) ? true : false} />העשרה / לימודים</p>
            </div>
            <div className="question-7">
                <h4 className={`Skills ${quesFill.includes('Skills') && 'not-fill'}`}>כישורים / ניסיון קודם (רלווטי למי שבחר עבודה)</h4>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={37} checked={(ques['Skills'].includes(37)) ? true : false} />הוראה</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={38} checked={(ques['Skills'].includes(38)) ? true : false} />מחשבים</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={39} checked={(ques['Skills'].includes(39)) ? true : false} />כספים/בנקאות</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={40} checked={(ques['Skills'].includes(40)) ? true : false} />מקצוע טכני</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={41} checked={(ques['Skills'].includes(41)) ? true : false} />טיסה</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={42} checked={(ques['Skills'].includes(42)) ? true : false} />הנהלת חשבונות</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={43} checked={(ques['Skills'].includes(43)) ? true : false} />אומנות</p>
                <p><input name='Skills' type='checkbox' className='ques7' onChange={(e) => handleChange(e)} value={44} checked={(ques['Skills'].includes(44)) ? true : false} />עבודה סוציאלית</p>
            </div>
            <div className="question-8">
                <h4 className={`VolunteerInterest ${quesFill.includes('VolunteerInterest') && 'not-fill'}`}>תחומי עניין להתנדבות (רלוונטי למי שבחר התנדבות)</h4>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={45} checked={(ques['VolunteerInterest'].includes(45)) ? true : false} />אוכלוסיות מוחלשות ונזקקים</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={46} checked={(ques['VolunteerInterest'].includes(46)) ? true : false} />איכות הסביבה</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={47} checked={(ques['VolunteerInterest'].includes(47)) ? true : false} />בעלי חיים</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={48} checked={(ques['VolunteerInterest'].includes(48)) ? true : false} />הקהילה הגאה</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={49} checked={(ques['VolunteerInterest'].includes(49)) ? true : false} />חיילים</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={50} checked={(ques['VolunteerInterest'].includes(50)) ? true : false} />מיעוטים ומהגרי עבודה</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={51} checked={(ques['VolunteerInterest'].includes(51)) ? true : false} />קשישים</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={52} checked={(ques['VolunteerInterest'].includes(52)) ? true : false} />חולים ומאושפזים</p>
                <p><input name='VolunteerInterest' type='checkbox' className='ques8' onChange={(e) => handleChange(e)} value={53} checked={(ques['VolunteerInterest'].includes(53)) ? true : false} />ניצולי שואה</p>
            </div>
            <div className="question-9">
                <h4 className={`SpareTimeInterest ${quesFill.includes('SpareTimeInterest') && 'not-fill'}`}>סוגי פעילות (למי שבחר פעילות פנאי)</h4>
                <p><input name='SpareTimeInterest' type='checkbox' className='ques9' onChange={(e) => handleChange(e)} value={54} checked={(ques['SpareTimeInterest'].includes(54)) ? true : false} />ריקוד</p>
                <p><input name='SpareTimeInterest' type='checkbox' className='ques9' onChange={(e) => handleChange(e)} value={55} checked={(ques['SpareTimeInterest'].includes(55)) ? true : false} />ספורט</p>
                <p><input name='SpareTimeInterest' type='checkbox' className='ques9' onChange={(e) => handleChange(e)} value={56} checked={(ques['SpareTimeInterest'].includes(56)) ? true : false} />טיולים</p>
                <p><input name='SpareTimeInterest' type='checkbox' className='ques9' onChange={(e) => handleChange(e)} value={57} checked={(ques['SpareTimeInterest'].includes(57)) ? true : false} />אומנות</p>
                <p><input name='SpareTimeInterest' type='checkbox' className='ques9' onChange={(e) => handleChange(e)} value={58} checked={(ques['SpareTimeInterest'].includes(58)) ? true : false} />תרבות</p>
            </div>
            <div className="question-10">
                <h4 className={`Accessibility ${quesFill.includes('Accessibility') && 'not-fill'}`}>צרכי נגישות</h4>
                <p><input name='Accessibility'type='checkbox' className='ques10' onChange={(e) => handleChange(e)} value={59} checked={(ques['Accessibility'].includes(59)) ? true : false} />מוגבלות פיזית</p>
                <p><input name='Accessibility'type='checkbox' className='ques10' onChange={(e) => handleChange(e)} value={60} checked={(ques['Accessibility'].includes(60)) ? true : false} />מוגבלות ראייה</p>
                <p><input name='Accessibility'type='checkbox' className='ques10' onChange={(e) => handleChange(e)} value={61} checked={(ques['Accessibility'].includes(61)) ? true : false} />מוגבלות שמיעה</p>
            </div>
            <div className="question-11">
                <h4 className={`EmploymentIntrest ${quesFill.includes('EmploymentIntrest') && 'not-fill'}`}>בא לי לעסוק ב- (רלוונטי למי שבחר תעסוקה)</h4>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={62} checked={(ques['EmploymentIntrest'].includes(62)) ? true : false} />הוראה</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={63} checked={(ques['EmploymentIntrest'].includes(63)) ? true : false} />מחשבים</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={64} checked={(ques['EmploymentIntrest'].includes(64)) ? true : false} />כספים/בנקאות</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={65} checked={(ques['EmploymentIntrest'].includes(65)) ? true : false} />מקצוע טכני</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={66} checked={(ques['EmploymentIntrest'].includes(66)) ? true : false} />טיסה</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={67} checked={(ques['EmploymentIntrest'].includes(67)) ? true : false} />הנהלת חשבונות</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={68} checked={(ques['EmploymentIntrest'].includes(68)) ? true : false} />אומנות</p>
                <p><input name='EmploymentIntrest'type='checkbox' className='ques11' onChange={(e) => handleChange(e)} value={69} checked={(ques['EmploymentIntrest'].includes(69)) ? true : false} />עבודה סוציאלית</p>
            </div>
            <div className="question-12">
                <h4 className={`Gender ${quesFill.includes('Gender') && 'not-fill'}`}>העדפות מגדר</h4>
                <p><input name='Gender' type='radio' className='ques12' onChange={(e) => handleChange(e)} value={70} checked={(ques['Gender'].includes(70)) ? true : false} />לא משנה לי</p>
                <p><input name='Gender' type='radio' className='ques12' onChange={(e) => handleChange(e)} value={71} checked={(ques['Gender'].includes(71)) ? true : false} />נשים בלבד</p>
                <p><input name='Gender' type='radio' className='ques12' onChange={(e) => handleChange(e)} value={72} checked={(ques['Gender'].includes(72)) ? true : false} />גברים בלבד</p>
            </div>
            <div className="question-13">
                <h4 className={`languge ${quesFill.includes('languge') && 'not-fill'}`}>שפות</h4>
                <p><input name='languge' type='checkbox' className='ques13' onChange={(e) => handleChange(e)} value={73} checked={(ques['languge'].includes(73)) ? true : false} />עברית</p>
                <p><input name='languge'type='checkbox' className='ques13' onChange={(e) => handleChange(e)} value={74} checked={(ques['languge'].includes(74)) ? true : false} />אנגלית</p>
                <p><input name='languge' type='checkbox' className='ques13' onChange={(e) => handleChange(e)} value={75} checked={(ques['languge'].includes(75)) ? true : false} />רוסית</p>
                <p><input name='languge' type='checkbox' className='ques13' onChange={(e) => handleChange(e)} value={76} checked={(ques['languge'].includes(76)) ? true : false} />אמהרית</p>
                <p><input name='languge' type='checkbox' className='ques13' onChange={(e) => handleChange(e)} value={77} checked={(ques['languge'].includes(77)) ? true : false} />אידיש</p>
            </div>
            <div className="ques-fill-action">
            <button onSubmit={handleChange}>המשך</button>`
            </div>
            </form>
            </div>
           {isFillPopUp && <FillPopUp setIsFillPopUp={setIsFillPopUp} continueToResultPage={continueToResultPage} ques={ques}/>}
        </div>
    )

}
