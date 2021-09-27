import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss'
import { useKeycloak } from '@react-keycloak/web'

export const NavBar = () => {
  const { keycloak } = useKeycloak();
  
  return (
    <nav className='navbar-container'>
      <section className='navbar-container-links'>
          <Link to="/home">
            Home
          </Link>
          <Link to="/home">
            Home
          </Link>
      </section>
      <section className='navbar-container-logout'>
        <button onClick={keycloak.logout}> 
          Logout
        </button>
      </section>
    </nav>
  )
}
