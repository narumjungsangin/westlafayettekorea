import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage'; //localhost 부르면 landingpage.js로 redirect
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
