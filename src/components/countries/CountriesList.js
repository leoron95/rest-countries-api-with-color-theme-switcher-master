import React from 'react'
import { Grid, Skeleton, Spinner } from '@chakra-ui/react'
import { CountryCard } from '../countries/CountryCard'

export const CountriesList = ({data, loading}) => {

    return (
        <>
        { loading && <Spinner 
            display='flex'
            margin='auto'
            size='xl' 
            color='blue.500' 
            thickness='5px'
        />}
        
            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}  gap={10} className='animate__animated animate__fadeIn' >
                        {data.map(country => 
                            (   
                                <CountryCard key={country.name} {...country} />

                            )
                        )}
            </Grid>

        </>
    )
}
