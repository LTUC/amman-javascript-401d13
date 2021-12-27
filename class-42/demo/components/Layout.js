import React from 'react'
import { Center } from '@chakra-ui/react';
import Nav from './Nav';

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <Center height={'100vh'} centerContent bg={"#158df9"} color={'white'}>
        {props.children}
      </Center>
    </div>
  )
}
