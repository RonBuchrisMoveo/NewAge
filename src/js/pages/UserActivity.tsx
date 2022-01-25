import { Screen } from 'js/cmps/Screen'
import { IRootState } from 'js/interfaces/rootState.interface'
import { SignUpActivity } from 'js/pages/SignUpActivity'
import { Loader } from 'js/services/Loader'
import { setActivityToShow, setAddUserActivity } from 'js/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router'
import { MdCheckCircleOutline } from "react-icons/md";

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
        history.push('/activity/sign-up-activity')
    }

    const backToActivities=()=>{
        dispatch(setActivityToShow(null))
        history.push('/result')
    }

    if (!userActivity) return <Loader />
    return (
        <div className='activity-container'>
            <Screen/>
            <div className="activity ">
                <img className='activity-img' src={userActivity[0].Image ? userActivity[0].Image :IMG_DIF } alt='' />
                <div className="activity-des">
                <h3 className="title">{userActivity[0].Name}</h3>
                <div className="short-des"><MdCheckCircleOutline/>{userActivity[0]['Short Description']}</div>
                {userActivity[0]['Fit Explanation']&&<div className="fit-exp"><MdCheckCircleOutline/>{userActivity[0]['Fit Explanation']}</div>}
                {/* <div className="long-des">{userActivity[0]['Long Description']}</div> */}
                <div className="loc"><MdCheckCircleOutline/>ב{userActivity[0]['Location Description']}</div>
                <div className="button-actions">
                    <button className="approve" onClick={() => addUserActivity(userActivity[0].ActivityId)}>להרשמה</button>
                    <button className="forward" onClick={() => backToActivities()}>חזרה</button>
                </div>
                </div>
            </div>
            <Route path="/activity/sign-up-activity" component={SignUpActivity} />  
        </div>
    )
}
