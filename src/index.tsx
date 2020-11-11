import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-less/semantic.less';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import {RootReducer, RootState} from "./redux/reducer/RootReducer";

import 'react-redux'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {
  }
}

const store = createStore(RootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
