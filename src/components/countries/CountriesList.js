import React from 'react'
import { Grid } from '@chakra-ui/react'
import { CountryCard } from '../countries/CountryCard'

export const CountriesList = ({data, loading}) => {

    // const {data, loading} = useFetchCountries()
    // console.log('Data:', data)
    return (
        <>
       
            {/* { loading && <h1>Loading</h1>} */}
            
            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}  gap={10} className='animate__animated animate__fadeIn' >
                        {data.map(country => 
                            (   
                                <CountryCard key={country.name} {...country} loading={loading} />

                            )
                        )}
            </Grid>
            

        </>
    )
}
