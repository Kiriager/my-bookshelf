import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import logo from 'src/icons/logo.svg';
import './App.css';
import { HOME_ROUTE, INDEX_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from './config';
import { useAppSelector } from './hooks/store';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const authState = useAppSelector(state => state.auth);

  if (authState.status === 'unauthorized') {
    return (
      <Routes>
        <Route path={INDEX_ROUTE}>
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
          <Route path='*' element={<Navigate replace to={LOGIN_ROUTE} />} />
          <Route index element={<Navigate replace to={LOGIN_ROUTE} />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path={INDEX_ROUTE}>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path='*' element={<Navigate replace to={HOME_ROUTE} />} />
          <Route index element={<Navigate replace to={HOME_ROUTE} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
