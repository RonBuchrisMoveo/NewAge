import { IRootState } from 'js/interfaces/rootState.interface';
import { IUserLogin } from 'js/interfaces/userLogin.interface';
import { setLogin } from 'js/store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';


export const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: IRootState) => state.data.user)
    const [userName, setUserName] = useState('Moshe@gmail.com')
    const [password, setPassword] = useState('ehjf7wm378')

    const handleChange = ({ target }: any) => {
        (target.name === 'userName') ?
            setUserName(target.value) :
            setPassword(target.value)
    }
    const onLogin=()=>{
        const user:IUserLogin={
            User:userName,
            Password:password
        }
        dispatch(setLogin(user))
    }

    return (
        <div className='login-container'>
            <div className="container">
                <div className="login-header">כניסה</div>
                <form className='form' onSubmit={(e)=>{
                    e.preventDefault()
                    onLogin()
                    }}>
                    <div className="username">שם משתמש</div>
                    <input
                        className='userName'
                        type='text'
                        name='userName'
                        id='userName'
                        placeholder='שם משתמש'
                        value={userName}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="password">סיסמה</div>
                    <input
                        className='password'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='סיסמה'
                        value={password}
                        onChange={(e) => handleChange(e)}
                    />
                    <button className='submit-btn' type="submit" onSubmit={onLogin} >כניסה</button>
                </form>
            </div>
        </div>
    )
}
