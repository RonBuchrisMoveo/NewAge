import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

export const Screen = () => {
    const history = useHistory()
    const location =useLocation()
    const [screen, setScreen] = useState(false)

    useEffect(() => {
        if(location.pathname==='/login') setScreen(true)
        else setScreen(false)
    }, [location.pathname])

    const toggleModal = () => {
        setScreen(!screen)
        history.push('/')
    }

    return (
        <div
            className={`${screen ? 'screen' : ''}`}
            onClick={toggleModal}
        ></div>
    )
}
