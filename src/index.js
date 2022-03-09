import React from 'react';
import ReactDOM from 'react-dom';
import {CountriesApp} from '../src/CountriesApp';
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react'
import theme from './theme'

import './index.css';
import { AppRouter } from './router/AppRouter';


ReactDOM.render(

  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AppRouter>
      <CountriesApp />
      </AppRouter>
  </ChakraProvider>
    ,
  document.getElementById('root')
);

