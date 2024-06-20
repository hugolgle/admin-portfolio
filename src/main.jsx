import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store, { persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getProjects } from './redux/actions/project.action';
import { getParcour } from './redux/actions/parcour.action.js';
import { getAbout } from './redux/actions/about.action.js';
import { getXpPro } from './redux/actions/xpPro.action.js';
store.dispatch(getProjects())
store.dispatch(getParcour())
store.dispatch(getAbout())
store.dispatch(getXpPro())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
