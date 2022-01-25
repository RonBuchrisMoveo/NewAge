import { IRootState } from 'js/interfaces/rootState.interface'
import { SignUpActivity } from 'js/pages/SignUpActivity'
import { Loader } from 'js/services/Loader'
import { setAddUserActivity } from 'js/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router'

export const UserActivity = () => {
    const dispatch = useDispatch()
    const userActivity = useSelector((state: IRootState) => state.data.userActivity)
    const user = useSelector((state: IRootState) => state.data.user)
    const history = useHistory()
    const IMG_DIF = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg'

    const addUserActivity=(activityId:number)=>{
        const addActivity={
            UserId:user.id.toString(),
            ActivityID:activityId.toString()
        }
        dispatch(setAddUserActivity(addActivity))
        history.push('/sign-up-activity')
    }

    if (!userActivity) return <Loader />
    return (
        <div className='activity-container'>
            <div className="activity ">
                <img className='activity-img' src={userActivity[0].Image ? userActivity[0].Image :IMG_DIF } alt='' />
                <div className="activity-des">

                <h3 className="title">{userActivity[0].Name}</h3>
                <div className="short-des">{userActivity[0]['Short Description']}</div>
                <div className="fit-exp">{userActivity[0]['Fit Explanation']}</div>
                <div className="long-des">{userActivity[0]['Long Description']}</div>
                <div className="loc">ב{userActivity[0]['Location Description']}</div>
                <div className="button-actions">
                    <button className="forward" onClick={() => history.push('/result')}>חזרה</button>
                    <button className="approve" onClick={() => addUserActivity(userActivity[0].ActivityId)}>להרשמה</button>
                </div>
                </div>
            </div>
        </div>
    )
}
