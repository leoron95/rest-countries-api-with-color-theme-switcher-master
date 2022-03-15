import { Box, Heading, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import React from 'react'

export const CountryCard = ({
    name,
    flag,
    population,
    region,
    capital
}) =>  {
    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')
    const populationFormatted = population.toLocaleString('en-US', {maximumFractionDigits:2})
    return (
        <>

            <Link to={`/country/${name}`}>
            
            <Box  height='full' width='full' borderRadius='lg' overflow='hidden'  cursor='pointer' className='animate__animated animate__fadeIn shadow card'  bg={bgColor} color={textColor} >
                
                <img src={flag}  alt={name} ></img>
                    
                    <Box
                        mt='6'
                        ml='5'
                        lineHeight='taller'
                        className='card-title'
                        fontWeight='800'
                        >
                            <Heading as='h2' fontWeight='800' fontFamily='Nunito Sans' fontSize='21px'>{name}</Heading>
                    </Box>

                        <Box
                            mt='3'
                            mb='5'
                            ml='5'
                            lineHeight='taller'
                            isTruncated
                            fontWeight='300'
                            >
                                <List>
                                    <ListItem><b>Population: </b>{populationFormatted}</ListItem>
                                    <ListItem><b>Region: </b>{region}</ListItem>
                                    
                                    {capital &&
                                        <ListItem><b>Capital: </b>{capital} </ListItem>} 
                                </List>
                        </Box>
            </Box>
        </Link>
        </>
    )
}
