
import { Screen } from 'js/cmps/Screen';
import { IRootState } from 'js/interfaces/rootState.interface';
import { IUserLogin } from 'js/interfaces/userLogin.interface';
import { AuthService } from 'js/services/AuthService';
import { setLogin, setQuesFill, setUserQues } from 'js/store';
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { ReactComponent as Logo } from 'assets/imgs/logo.svg'
import { Loader } from 'js/services/Loader';


export const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loader, setLoader] = useState(false);
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    // const [userName, setUserName] = useState('Ekatz@gmail.com')
    // const [password, setPassword] = useState('123')
    const userQues = useSelector((state: IRootState) => state.data.userQues)

    useEffect(() => {
        if (userQues) {
            const quesFill = AuthService.checkQuesFill(userQues)
            if (quesFill.length) {
                dispatch(setQuesFill(quesFill))
                history.push('/update-user-ques')
            } else {
                dispatch(setUserQues(userQues))
                history.push('/result')
            }
            setLoader(true)
        }
    }, [userQues])

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        (target.name === 'userName') ?
            setUserName(target.value) :
            setPassword(target.value)
    }

    const onLogin = () => {
        if(!userName.length || !password.length) return
        setLoader(true)
        const user: IUserLogin = {
            User: userName,
            password: password
        }
         dispatch(setLogin(user))
    }


    return(
        <div className='login-container'>
            <div className="container">
                <div className="login-header"><Logo/></div>
                <form className='form' onSubmit={(e) => {
                    e.preventDefault()
                    onLogin()
                }}>
                    <input
                        className='userName'
                        type='text'
                        name='userName'
                        id='userName'
                        placeholder='שם משתמש'
                        value={userName}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        className='password'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='סיסמה'
                        value={password}
                        onChange={(e) => handleChange(e)}
                    />

                    <button className='submit-btn' type="submit" onSubmit={onLogin} >המשך</button>
                </form>
            </div>
        </div>
    )
}
