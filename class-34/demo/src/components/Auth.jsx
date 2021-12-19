import React, { useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../context/AuthContext';

export default function Auth(props) {
  const authContext = useContext(LoginContext);
  const canDo = props.capability ? authContext.can(props.capability) : true;
  const okToRender = authContext.loggedIn && canDo;
  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )
}
