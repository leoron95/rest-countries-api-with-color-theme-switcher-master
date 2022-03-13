import React from 'react'
import { Header } from './components/ui/Header'
import {Search} from '../src/components/search/Search'
import { CountriesList} from './components/countries/CountriesList'
import { Container, useColorModeValue } from '@chakra-ui/react'

export const CountriesApp = () => {
    const bgColor = useColorModeValue('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%')
    return (
        <>
            {/* <Container maxW='full'  boxShadow='lg' >
                <Header />
            </Container> */}
        
            <Container maxW='8xl' bg='bgColor' width='100%'>
                <Search/>
            </Container>

    </>
)
}




