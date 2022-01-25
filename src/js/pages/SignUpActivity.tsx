import { IRootState } from 'js/interfaces/rootState.interface'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const SignUpActivity = () => {
    const userActivity = useSelector((state:IRootState) => state.data.userActivity)
    const history = useHistory()
    const IMG_DIF = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg'



    return (
        <div className='activity-sign-up-container'>
            <div className="activity-sign-up">
            <img src={userActivity[0].Image ? userActivity[0].Image :IMG_DIF } alt="" className="sign-up-img" />
            <h2 className="approve">נרשמת בהצלחה!</h2>
            <div className="middle">שמחים לקבל אותך ל{userActivity[0].Name}</div>
            <div className="schedulle">המפגש יתקיים ב{userActivity[0]['City']}</div>
            <div className="activity-day">בימים: {userActivity[0]['Activity Dayes']}</div>
            <div className="activity-hours">בשעות: {userActivity[0]['Activity Hours']}</div>
            <h3 className="more-info">לפרטנים נוספים:</h3>
            <div className="contact">{userActivity[0]['Contact Name']} {userActivity[0]['Contact Phone']}</div>
            <div className="button-actions">
                    <button className="forward" onClick={() => history.push('/')}>לעמוד הבית</button>
                    <button className="approve" onClick={() => history.push('/result')}>לפעילויות נוספות</button>
                </div>
            </div>
        </div>
    )
}
