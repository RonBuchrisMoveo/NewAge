import { IRootState } from 'js/interfaces/rootState.interface'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { ReactComponent as Logo } from 'assets/imgs/logo.svg'


export const SignUpActivity = () => {
    const userActivity = useSelector((state:IRootState) => state.data.userActivity)
    const history = useHistory()
    const IMG_DIF = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg'



    return (
        <div className='activity-sign-up-container'>
            <div className="activity-sign-up">
                <div className="logo">
                <Logo/>
                </div>
            <h2 className="approve">נרשמת בהצלחה!</h2>
            <div className="middle">שמחים לקבל אותך ל{userActivity[0].Name}</div>
            <div className="divider"></div>
            <div className="schedulle">המפגש יתקיים ב{userActivity[0]['City']}</div>
            <div className="activity-day">בימים: {userActivity[0]['Activity Dayes']}</div>
            <div className="activity-hours">בשעות: {userActivity[0]['Activity Hours']}</div>
            <div className="divider"></div>
            {userActivity[0]['Contact Name'] && <><h3 className="more-info">לפרטים נוספים:</h3><div className="contact">{userActivity[0]['Contact Name']} {userActivity[0]['Contact Phone']}</div></>}
            </div>
        </div>
    )
}
