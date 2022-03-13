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
            Heading:{
                baseStyle: {
                    fontFamily: "Inter",
                    // fontWeight: "600",
                  },
            },
            h1:{
                fontFamily: 'Nunito Sans',
                // fontWeight: 100
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

            // h1:{
            //     fontSize: ''
            // }
        }
    },

        
    config : {
        initialColorMode: 'light',
        useSystemColorMode: false,
        cssVarPrefix: 'ck'
      }
})




export default theme