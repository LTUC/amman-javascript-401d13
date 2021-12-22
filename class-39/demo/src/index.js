import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import rtkStore from './redux-toolkit-store/';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={rtkStore}>
    <App />
  </Provider>,
  root
);