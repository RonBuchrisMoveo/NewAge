import { IRootState } from 'js/interfaces/rootState.interface'
import { Loader } from 'js/services/Loader'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

export const UserActivity = () => {
    const userActivity = useSelector((state: IRootState) => state.data.userActivity)
    const history = useHistory()

    if (!userActivity) return <Loader />
    return (
        <div className='activity-container'>
            <div className="activity ">
                <h3 className="title">להלן מידע נוסף על {userActivity['Name']}:</h3>
                <img className='activity-img' src='https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg' alt='' />
                <div className="short-des">{userActivity['Short Description']}</div>
                <div className="long-des">{userActivity['Long Description']}</div>
                <div className="activity-web"><a href={userActivity['Web Site'] } target="_blank">לאתר הפעילות</a></div>
                <div className="button-actions">
                    <button className="forward" onClick={() => history.push('/result')}>חזרה</button>
                    <button className="approve" onClick={() => history.push('/sign-up-activity')}>להרשמה</button>
                </div>
            </div>
        </div>
    )
}
