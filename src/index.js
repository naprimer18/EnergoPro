// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux'
import { store } from './store'

// Component
import { App } from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);

