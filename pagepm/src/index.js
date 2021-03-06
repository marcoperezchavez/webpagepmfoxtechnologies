import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/Anton/Anton-Regular.ttf';
import './assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf';
import './assets/fonts/Fascinate_Inline/FascinateInline-Regular.ttf';
import './assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf';

import firebase from '../src/utils/firebaseConfiguration.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const test = firebase.apps[0];

root.render(
  
  <React.StrictMode>
    <App />
    {/* <>
    <code>
      <pre>{JSON.stringify(test.options,null,2)}</pre>
    </code>
    </> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
