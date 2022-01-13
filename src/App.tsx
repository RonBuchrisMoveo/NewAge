import { AppHeader } from 'js/cmps/AppHeader';
import { Login } from 'js/pages/Login';
import React from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';



export const App =()=> {

    return (
    <div className="app-container">
        <HashRouter>
          <AppHeader/>
      <main>
          <Switch>
          <Route path="/login">{<Login/>}</Route>
          <Route path="/"></Route>
          </Switch>
      </main>
        </HashRouter>
    </div>

    
  );
}


