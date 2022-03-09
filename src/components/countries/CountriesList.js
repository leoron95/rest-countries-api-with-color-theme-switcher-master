import React from 'react'
import { Container, Grid } from '@chakra-ui/react'
import { useFetchCountries } from '../../hooks/useFetchCountries'
import { CountryCard } from '../countries/CountryCard'

export const CountriesList = ({data, loading}) => {

    // const {data, loading} = useFetchCountries()
    // console.log('Data:', data)

    return (
        <>
       
            { loading && <h1>Loading</h1>}
            <Grid templateColumns='repeat(4, 1fr)' gap={6} className='animate__animated animate__fadeIn'>
                        {data.map(country => 
                            (   
                                <CountryCard key={country.name} {...country} />
                                
                            )
                        )}
            </Grid>

        </>
    )
}
