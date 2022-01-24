import { IRootState } from "js/interfaces/rootState.interface";
import { setLogout } from "js/store";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { ReactComponent as LogoHeader } from 'assets/imgs/logo-header.svg'
import { useEffect, useState } from "react";

export function AppHeader() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector((state: IRootState) => state.data.user)
    const userResult = useSelector((state: IRootState) => state.data.userResult)
    const [header, setHeader] = useState('')

    useEffect(() => {
        getHeader()
    }, [history.location.pathname])

    const onLogout = async() => {
        await dispatch(setLogout())
        // setHeader('ברוכים הבאים')
        history.push('/')

    }

    const getHeader=()=>{
        console.log(`user`, user)
        if(userResult) return setHeader(`${user?.name}, מצאנו עבורך היום:`)
        else if(user) return setHeader(`שלום ${user?.name}`)
        else return setHeader('ברוכים הבאים')
    }


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