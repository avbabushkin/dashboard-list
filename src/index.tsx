import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {store} from "./store/store"
import '@shturval/takelage-ui/style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.querySelector('#root')
);

reportWebVitals();
