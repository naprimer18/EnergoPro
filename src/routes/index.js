import React from 'react';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

import { useKeycloak } from 'react-keycloak'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  const { keycloak } = useKeycloak();
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route
            exact
            path="/"
            render={() => (
                  !!keycloak.authenticated ?
                  <Redirect to="/home" /> :
                  <Redirect to="/login" /> 
                )
            }
          />
        </Switch>
      </Router>
   </>
  )
};