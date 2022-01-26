import { UserResultList } from 'js/cmps/UserResultList'
import { IRootState } from 'js/interfaces/rootState.interface'
import { IUserResult } from 'js/interfaces/userResult'
import { Loader } from 'js/services/Loader'
import { setUserResult } from 'js/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UserResult = () => {
    const dispatch = useDispatch()
    const userResult = useSelector((state: IRootState) => state.data.userResult)
    const user= useSelector((state: IRootState) => state.data.user)

    useEffect(() => {
        if(userResult) return
        dispatch(setUserResult())
    }, []);
    
    if (!userResult || !user) return <Loader />
    return (
        <div className='results-container'>
            {userResult.results.map((result: any, idx: number) => {
                return <UserResultList userId={(user.id).toString()} result={result} key={idx} />
            })}
        </div>
    )
}
