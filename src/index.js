import React from 'react';
import ReactDOM from 'react-dom';
import {CountriesApp} from '../src/CountriesApp';
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react'
// import theme from './theme'


import './index.css';
import '../src/theme/styles.css'
import { AppRouter } from './router/AppRouter';
import theme from '../src/theme/index';


ReactDOM.render(

  <ChakraProvider theme={theme}>
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <AppRouter>
      <CountriesApp />
      </AppRouter>
  </ChakraProvider>
    ,
  document.getElementById('root')
);

