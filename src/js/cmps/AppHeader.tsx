import { NavLink, useHistory } from "react-router-dom";

export function AppHeader() {
    const history = useHistory()

    return (
        <header className="app-header">
            <div className="main-app">
                <div className="menu">
                    <NavLink to={'/login'}>
                        <div className="login">כניסה/הרשמה</div>
                    </NavLink>
                </div>
                <div className="logo">
                    <div className="logo btn" onClick={() => history.push('/')}>NewAge</div>
                </div>
            </div>
        </header>
    )
}