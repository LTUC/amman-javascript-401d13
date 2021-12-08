import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

const root = document.getElementById('root');

ReactDom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  , root);
