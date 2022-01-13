import React from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';



export const App =()=> {

    return (
    <div className="app-container">
        <HashRouter>
      <main>
          <Switch>
          <Route path="/"></Route>
          </Switch>
      </main>
        </HashRouter>
    </div>

    
  );
}


