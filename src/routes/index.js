import React from 'react';
import { useKeycloak } from '@react-keycloak/web'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers'

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const Routes = () => {
  const { initialized } = useKeycloak();

  if (!initialized)
    return <div>Loading keycloak...</div>

  return (
    <Router>
      <PrivateRoute path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/home" />
    </Router>
  )
}