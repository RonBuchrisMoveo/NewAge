import { AppHeader } from 'js/cmps/AppHeader';

import { MainApp } from 'js/pages/MainApp';
import { SignUpActivity } from 'js/pages/SignUpActivity';
import { UpdateUserQues } from 'js/pages/UpdateUserQues';
import { UserActivity } from 'js/pages/UserActivity';
import { UserResult } from 'js/pages/UserResult';
import React from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';



export const App =()=> {

    return (
    <div className="app-container">
        <HashRouter>
          <AppHeader/>
      <main>
          <Switch>
          <Route path='/sign-up-activity'>{<SignUpActivity/>}</Route>
          <Route path="/activity">{<UserActivity/>}</Route>
          <Route path="/result">{<UserResult/>}</Route>
          <Route path="/update-user-ques">{<UpdateUserQues/>}</Route>
          <Route path="/">{<MainApp/>}</Route>
          </Switch>
      </main>
        </HashRouter>
    </div>

    
  );
}


