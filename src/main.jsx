import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </HashRouter>
);
