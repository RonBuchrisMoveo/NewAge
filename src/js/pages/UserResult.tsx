import { UserResultList } from 'js/cmps/UserResultList'
import { IRootState } from 'js/interfaces/rootState.interface'
import { IUserResult } from 'js/interfaces/userResult'
import { Loader } from 'js/services/Loader'
import React from 'react'
import { useSelector } from 'react-redux'

export const UserResult = () => {
    const userResult = useSelector((state: IRootState) => state.data.userResult)
    const user= useSelector((state: IRootState) => state.data.user)
    if (!userResult) return <Loader />
    return (
        <div className='results-container'>
            {userResult.results.map((result: any, idx: number) => {
                return <UserResultList userId={user.id.toString()} result={result} key={idx} />
            })}
        </div>
    )
}
