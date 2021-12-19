import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const testUsers = {
  admin: { password: 'password', name: 'Administrator', role: 'admin', capabilities: ['create', 'read', 'update', 'delete'] },
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update'] },
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create'] },
};

export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ capabilities: [] });

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const login = (username, password) => {
    if (testUsers[username]) {
      const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
      validateToken(token);
    }
  };

  const logout = () => {
    manageLoginState(false, null, { capabilities: [] })
  };

  const validateToken = token => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      manageLoginState(true, token, user);
    }
    catch (e) {
      manageLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }

  };

  const manageLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setUser(user);
    setLoggedIn(loggedIn);
  }

  const state = {
    loggedIn,
    user,
    can,
    login,
    logout
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}
