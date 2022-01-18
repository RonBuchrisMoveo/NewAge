import { IUserQues } from 'js/interfaces/userQues.interface'
import{ Dispatch, SetStateAction } from 'react'

export const FillPopUp = (props:{setIsFillPopUp:Dispatch<SetStateAction<boolean>>, continueToResultPage:Function,ques:IUserQues}) => {
    const {setIsFillPopUp,continueToResultPage,ques}=props
    return (
        <div className='fill-pop-up-container'>
            <div className="fill-pop-up">
                <h3 className="warnning">שים לב !</h3>
                <p className="pop-up-text">יש צורך לענות על כל השאלות בכדי לקבל תוצאות טובות יותר</p>
                <div className="fill-pop-up-butoon-actions">
                <button className="forward" onClick={() => setIsFillPopUp(false)}>חזרה</button>
                <button className="approve" onClick={() => {continueToResultPage(ques)}}>המשך</button>
                </div>
            </div>
        </div>
    )
}
