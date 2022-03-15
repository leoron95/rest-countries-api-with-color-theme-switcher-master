import React from 'react';
import ReactDOM from 'react-dom';
import {CountriesApp} from '../src/CountriesApp';
import { ChakraProvider  } from '@chakra-ui/react'

import './index.css';
import '../src/theme/styles.css'
import { AppRouter } from './router/AppRouter';
import theme from '../src/theme/index';


ReactDOM.render(

  <ChakraProvider theme={theme}>
        <AppRouter>
          <CountriesApp />
        </AppRouter>
  </ChakraProvider>
    ,
  document.getElementById('root')
);

