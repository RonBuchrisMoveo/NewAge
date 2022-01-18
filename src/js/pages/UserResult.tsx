import { UserResultList } from 'js/cmps/UserResultList'
import { IRootState } from 'js/interfaces/rootState.interface'
import { Loader } from 'js/services/Loader'
import React from 'react'
import { useSelector } from 'react-redux'

export const UserResult = () => {
    const  userResult= useSelector((state:IRootState) => state.data.userResult)
if(!userResult) return <Loader/>
    return (
        <div className='results-container'>
            <h3 className="title-container">{userResult.UserName}, מצאנו עבורך היום:</h3>
                {userResult.Results.map((result:any,idx:number)=>{
                    return <UserResultList userId={userResult.UserId} result={result} key={idx}/>
                })} 
        </div>
    )
}
