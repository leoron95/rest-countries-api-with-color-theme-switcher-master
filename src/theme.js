// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const customFonts = {
  fonts:{
    body: 'Nunito Sans',
    h1: 'Nunito Sans'
  }
}

// 3. extend the theme
const theme = extendTheme({ config, customFonts })

export default theme