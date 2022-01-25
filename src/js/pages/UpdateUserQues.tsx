import { QuesFill } from 'js/cmps/QuesFill'
import { IRootState } from 'js/interfaces/rootState.interface'
import { Loader } from 'js/services/Loader'
// import { setUserQues } from 'js/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UpdateUserQues = () => {
    const user = useSelector((state: IRootState) => state.data.user)
    const userQues = useSelector((state: IRootState) => state.data.userQues)

    return (
        <div className='user-container'>
            <div className="questions">
                <QuesFill userQues={userQues}/>
            </div>

        </div>
    )
}
