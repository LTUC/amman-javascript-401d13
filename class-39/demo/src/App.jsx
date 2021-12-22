import React from 'react';
import { ChakraProvider, Center, Box } from '@chakra-ui/react';
import Characters from './components/Characters';

export default function App() {
  return (
    <ChakraProvider>
      <Box h={'100%'} bg='#267fb5' color='white'>
        <Characters />
      </Box>
    </ChakraProvider>
  )
};
