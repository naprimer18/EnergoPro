// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux'
import { store } from './store'

// Keycloak
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keyCloakConfig from './keyCloakConfig'

// Component
import { App } from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ReactKeycloakProvider authClient={keyCloakConfig}>
      <App/>
    </ReactKeycloakProvider>
  </Provider>,
  rootElement
);

