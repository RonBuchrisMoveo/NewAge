import { IRootState } from 'js/interfaces/rootState.interface'
import { Loader } from 'js/services/Loader'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const UserActivity = () => {
    const userActivity = useSelector((state: IRootState) => state.data.userActivity)
    const history = useHistory()
    const IMG_DIF = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg'

    if (!userActivity) return <Loader />
    console.log(`userActivity`, userActivity)
    return (
        <div className='activity-container'>
            <div className="activity ">
                <h3 className="title">להלן מידע נוסף על {userActivity[0].Name}:</h3>
                <img className='activity-img' src={userActivity[0].Image ? userActivity[0].Image :IMG_DIF } alt='' />
                <div className="short-des">{userActivity[0]['Short Description']}</div>
                <div className="fit-exp">{userActivity[0]['Fit Explanation']}</div>
                <div className="long-des">{userActivity[0]['Long Description']}</div>
                <div className="loc">ב{userActivity[0]['Location Description']}</div>
                <div className="activity-web"><a href={userActivity[0]['Web Site'] } target="_blank">לאתר הפעילות</a></div>
                <div className="button-actions">
                    <button className="forward" onClick={() => history.push('/result')}>חזרה</button>
                    <button className="approve" onClick={() => history.push('/sign-up-activity')}>להרשמה</button>
                </div>
            </div>
        </div>
    )
}
