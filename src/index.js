import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css";
import {Provider} from "react-redux";
import Store from "./Store/Store";




ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

