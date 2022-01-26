import { AppHeader } from 'js/cmps/AppHeader';
import { IRootState } from 'js/interfaces/rootState.interface';
import { Login } from 'js/pages/Login';

import { MainApp } from 'js/pages/MainApp';
import { SignUpActivity } from 'js/pages/SignUpActivity';
import { UpdateUserQues } from 'js/pages/UpdateUserQues';
import { UserActivity } from 'js/pages/UserActivity';
import { UserResult } from 'js/pages/UserResult';
import { Loader } from 'js/services/Loader';
import { setLogin } from 'js/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Route,Switch } from 'react-router-dom';



export const App =()=> {
  const dispatch = useDispatch()
  const user = useSelector((state:IRootState)=>state.data.user)
  const [currUser, setCurrUser] = useState();

   useEffect(() => {
     if(!localStorage.getItem('user')) return
     dispatch(setLogin(null))
     setCurrUser(user)
   }, []);
   

    return (
    <div className="app-container">
        <HashRouter>
          <AppHeader/>
      <main>
          <Switch>
          <Route path="/activity/:activityId">{<UserActivity/>}</Route>
          <Route path="/result">{<UserResult/>}</Route>
          <Route path="/update-user-ques">{<UpdateUserQues/>}</Route>
          <Route path="/">{<MainApp/>}</Route>
          </Switch>
      </main>
        </HashRouter>
    </div>

    
  );
}


