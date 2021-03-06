import { Screen } from 'js/cmps/Screen'
import { IRootState } from 'js/interfaces/rootState.interface'
import { SignUpActivity } from 'js/pages/SignUpActivity'
import { Loader } from 'js/services/Loader'
import { setActivityToShow, setAddUserActivity } from 'js/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory, useParams } from 'react-router'
import { MdCheckCircleOutline } from "react-icons/md";
import { IActivityToShow } from 'js/interfaces/activityToShow.interface'

export const UserActivity = () => {
    const dispatch = useDispatch()
    const {activityId}:any = useParams()
    const userActivity = useSelector((state: IRootState) => state.data.userActivity)
    const user = useSelector((state: IRootState) => state.data.user)
    const history = useHistory()
    const IMG_DIF = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg'


    useEffect(() => {
        if(userActivity || user) return
        const currUser:any =localStorage.getItem('user')
        const userJson = JSON.parse(currUser)
        const activityToShow:IActivityToShow ={
            UserId:(userJson.id).toString(),
            ActivityID:activityId.toString()
        }
      dispatch(setActivityToShow(activityToShow))
    }, []);
    
    const addUserActivity=(activityId:number)=>{
        const addActivity={
            UserId:user.id.toString(),
            ActivityID:activityId.toString()
        }
        dispatch(setAddUserActivity(addActivity))
        history.push(`/activity/${activityId}/sign-up-activity`)
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
                <div className="loc"><MdCheckCircleOutline/>??{userActivity[0]['Location Description']}</div>
                <div className="button-actions">
                    <button className="approve" onClick={() => addUserActivity(userActivity[0].ActivityId)}>????????????</button>
                    <button className="forward" onClick={() => backToActivities()}>????????</button>
                </div>
                </div>
            </div>
            <Route path={`/activity/${activityId}/sign-up-activity`} component={SignUpActivity} />  
        </div>
    )
}
