import React, { useEffect, useCallback} from "react";
import { useKeycloak } from "react-keycloak";
import './styles/index.scss'

export const Login = () => {
  const [keycloak, initialized] = useKeycloak();
  
  const fetchUserAndRoles = useCallback(async () => {
    const userData = await keycloak.loadUserInfo();
    console.log('userData ', userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    fetchUserAndRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keycloak.authenticated]);
    
  return (
    <>
    {
      !(initialized && !keycloak.authenticated) &&
      <div className="login-container">
        <h1>Energy Pro</h1>
        <button onClick={keycloak.login}>Login</button>
      </div>
    }
    </>
  )
};