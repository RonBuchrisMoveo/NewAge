import { setActivityToShow } from 'js/store'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'

export const Screen = () => {
    const history = useHistory()
    const location =useLocation()
    const dispatch=useDispatch()
    const [screen, setScreen] = useState(false)

    useEffect(() => {
        if(location.pathname==='/login'|| location.pathname===('/activity/sign-up-activity')) setScreen(true)
        else setScreen(false)
    }, [location.pathname])

    const toggleModal = () => {
        setScreen(!screen)
        if(location.pathname===('/activity/sign-up-activity')) {
            dispatch(setActivityToShow(null))
            history.push('/result')
            return
        } 
        history.push('/')
    }

    return (
        <div
            className={`${screen ? 'screen' : ''}`}
            onClick={toggleModal}
        ></div>
    )
}
