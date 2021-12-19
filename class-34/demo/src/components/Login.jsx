import React, { useContext, useState } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../context/AuthContext';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(LoginContext);

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    authContext.login(username, password);
  };

  return (
    <>
      <When condition={authContext.loggedIn}>
        <button onClick={authContext.logout}>Log Out</button>
      </When>

      <When condition={!authContext.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </When>
    </>
  )
}
