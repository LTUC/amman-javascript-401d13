import React, { useContext } from 'react';
import { Navbar, Alignment } from '@blueprintjs/core';
import { SettingContext } from '../context/Site';


export default function Header() {

  const context = useContext(SettingContext);

  return (
    <header>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>{context.title}</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </header>
  )
}
