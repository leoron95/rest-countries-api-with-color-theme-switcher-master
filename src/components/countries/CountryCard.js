import { Box, Center, Skeleton, Text, useColorModeValue } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import React from 'react'

export const CountryCard = ({
    name,
    flag,
    population,
    region,
    capital, loading
}) =>  {
    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')
    const populationFormatted = population.toLocaleString('en-US', {maximumFractionDigits:2})

    return (
        <>
        {loading && 
        <Skeleton isLoaded={!loading}> </Skeleton>}
        <Link to={`/country/${name}`}>

            <Box  height='full' width='full' borderRadius='lg' overflow='hidden'  cursor='pointer' className='animate__animated animate__fadeIn shadow card' bg={bgColor} color={textColor}  >
                <img src={flag}  alt={name} ></img>
                    <Box
                        mt='6'
                        ml='5'
                        fontWeight='bold'
                        as='h1'
                        lineHeight='tight'
                        >
                            {name}
                    </Box>
                    <Box
                        mt='3'
                        mb='5'
                        ml='5'
                        as='h1'
                        lineHeight='tight'
                        isTruncated
                        >
                            <ul>
                                <li><b>Population: </b>{populationFormatted}</li>
                                <li><b>Region: </b>{region}</li>
                                <li><b>Capital: </b>{capital}</li>
                            </ul>
                    </Box>
            </Box>

        </Link>


        </>
    )
}
