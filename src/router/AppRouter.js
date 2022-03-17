import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import { CountriesApp } from '../CountriesApp'
import { CountryDetails } from '../components/countries/CountryDetails'
import { Header } from '../components/ui/Header'
import { Container, useColorModeValue } from '@chakra-ui/react'


export const AppRouter = () => {
    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')
    return (
        <HashRouter>
            <Container maxW={[null,'full']}  boxShadow='lg' bg={bgColor} >

                <Header bgColor={bgColor}/>

            </Container>

            <Routes>
                <Route path="country/:countryName" element={<CountryDetails/>} />

                <Route path="/" element={<CountriesApp/>} />
            </Routes>
            
        </HashRouter>
    )
}
