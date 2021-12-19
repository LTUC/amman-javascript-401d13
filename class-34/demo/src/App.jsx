import React from 'react';
import Auth from './components/Auth';
import Login from './components/Login';
import LoginProvider from './context/AuthContext';

export default function App() {
  return (
    <LoginProvider>
      <Login />

      <Auth>
        <div>Any valid user can see this</div>
      </Auth>

      <Auth capability="create">
        <div>Users with create access can see this</div>
      </Auth>

      <Auth capability="update">
        <div>Users with update access can see this</div>
      </Auth>

      <Auth capability="delete">
        <div>Users with delete access can see this</div>
      </Auth>

    </LoginProvider>
  )
}
