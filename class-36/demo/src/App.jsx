import React from 'react';
// import './style.scss';
import Status from './components/Status';
import Votes from './components/Votes';
import { ChakraProvider, Center, Container } from '@chakra-ui/react';


export default function App(props) {
  return (
    <ChakraProvider>
      <Center bg='#267fb5' h='100vh' color='white'>
        <Votes />
        <Status />
      </Center>
    </ChakraProvider>
  )
}
