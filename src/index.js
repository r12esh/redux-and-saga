import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import "semantic-ui-css/semantic.min.css";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);