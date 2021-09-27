import React, { useCallback  } from "react";
import { useKeycloak } from '@react-keycloak/web'
import { Redirect, useLocation } from 'react-router-dom'
import './styles/index.scss'

export const Login = () => {
  const location = useLocation();
  const currentLocationState = location.state || {
    from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak();

  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  if (keycloak?.authenticated)
    return <Redirect to={currentLocationState} />

  return (
    <div>
      <div className="login-container">
        <h1>Energy Pro</h1>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}