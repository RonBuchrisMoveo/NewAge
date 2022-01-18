import { IRootState } from "js/interfaces/rootState.interface";
import { setLogout } from "js/store";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

export function AppHeader() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector((state:IRootState) => state.data.user)

const onLogout=()=>{
    dispatch(setLogout())
    history.push('/')

}

    return (
        <header className="app-header">
            <div className="main-app">
                <div className="menu">
                    {!user ? <NavLink to={'/login'}>
                       <div className="login">כניסה/הרשמה</div> 
                    </NavLink>:
                    <NavLink to={'/'}>
                        <div className="loagout" onClick={onLogout}>יציאה</div>
                    </NavLink>}
                </div>
                <div className="logo">
                    <div className="logo btn" onClick={() => history.push('/')}>NewMe</div>
                </div>
            </div>
        </header>
    )
}