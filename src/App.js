import React from 'react';
import { Routes } from './routes';
import './styles/index.scss'

export const App = () => {
  console.log(`API_URL' ${process.env.REACT_APP_API_URL}`);
  return (
    <>
      <Routes/>
    </>
  );
}
