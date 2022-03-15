import {extendTheme} from '@chakra-ui/react'


const theme = extendTheme({
    styles:{
        global:{
            body:{
                fontFamily: 'Nunito Sans',
            },
            h2:{
                fontFamily: 'Nunito Sans',
            },
            h1:{
                fontFamily: 'Nunito Sans',

            },
            h3:{
                fontWeight:600
            },
            b:{
                fontWeight:600
            },
            Text:{
                fontWeight:800
            }

        }
    },

        
    config : {
        initialColorMode: 'light',
        useSystemColorMode: false,
        cssVarPrefix: 'ck'
      }
})




export default theme