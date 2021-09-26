import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss'

export const NavBar = () => (
  <nav className='navbar-container'>
    <section className='navbar-container-links'>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
    </section>
    <section className='navbar-container-logout'>
      <button>
        Logout
      </button>
    </section>
  </nav>
)
