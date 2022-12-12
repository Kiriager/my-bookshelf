import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogInPage from './pages/LoginPage';
import './i18n/config';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <LogInPage />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
