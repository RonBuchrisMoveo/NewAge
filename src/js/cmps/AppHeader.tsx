
import { IRootState } from "js/interfaces/rootState.interface";
import { setHeaderTitle, setLogout } from "js/store";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { ReactComponent as LogoHeader } from 'assets/imgs/logo-header.svg'
import { useEffect, useState } from "react";
import { Loader } from "js/services/Loader";
import {useParams } from 'react-router'

export function AppHeader() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {activityId}:any = useParams()
    const user = useSelector((state: IRootState) => state.data.user)
    const headerTitle = useSelector((state: IRootState) => state.data.headerTitle)
    const userResult = useSelector((state: IRootState) => state.data.userResult)
    const userActivity = useSelector((state: IRootState) => state.data.userActivity)
    const [header, setHeader] = useState('')

    useEffect(() => {
        dispatch(setHeaderTitle(history.location.pathname))
        getHeader()
    }, [history.location.pathname||user])

    const onLogout = async() => {
        await dispatch(setLogout())
        history.push('/')

    }

    const getHeader=()=>{
        const currUser:any = localStorage.getItem('user')
        const userJson = JSON.parse(currUser)
        if((history.location.pathname).includes(`/activity/`)) return setHeader('בחירה מצויינת!')
        if(history.location.pathname==='/result') return setHeader(`${userJson.name}, מצאנו עבורך היום:`)
        else if(history.location.pathname==='/update-user-ques') return setHeader(`שלום ${userJson.name}`)
        else if(history.location.pathname==='/') setHeader('ברוכים הבאים')
    }

    if(!headerTitle&&!user) return <Loader/>
    return (
        <header className="app-header">
            <div className="main-app">
                <div className="menu">
                    {!user ? <NavLink to={'/login'}>
                        <div className="login"><FaUserAlt /></div>
                    </NavLink> :
                        <NavLink to={'/'}>
                            <div className="loagout" onClick={onLogout}><FaUserAltSlash /></div>
                        </NavLink>}
                </div>
                <div className="welcome">
                    <p>{header}</p>
                </div>
                <div className="logo">
                    <div className="logo-btn btn" onClick={() => history.push('/')}><LogoHeader /></div>
                </div>
            </div>
        </header>
    )
}