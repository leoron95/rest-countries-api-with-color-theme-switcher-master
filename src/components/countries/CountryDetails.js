import React, {useEffect, useMemo, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {getCountry} from '../../selectors/getCountry'
import {useFetchCountries} from '../../hooks/useFetchCountries';

import { Box, Flex, Skeleton, useColorModeValue, List, ListItem, Stack, Text, HStack,} from '@chakra-ui/react'
import { Button, Image,Container, Heading} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Header } from '../ui/Header';
import { useFetch } from '../../hooks/useFetch';

export const CountryDetails = () => {

    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')

    const {countryName} = useParams();
    const {data, loading} = useFetchCountries()

// const [countries,setCountries] = useState(data);
//     useEffect(() => {
//         setCountries(data);
//     },[data])

    // const country = useMemo(() => getCountry(data, countryName),[data, countryName])
    const country = getCountry(data, countryName)

    // console.log('Data', country, loading)


    const navigate = useNavigate();

    const {
    name,
    flag,
    population,
    region,
    capital,
    nativeName,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
    } = country
    console.log(country);


    const domains = topLevelDomain?.map( domain => domain)
    const countryCurrencies = currencies?.map(currency => currency.name)
    const countryCurrenciesSymbol = currencies?.map(currency => currency.symbol)
    const countryLanguages = languages?.map(language => language.name)
    // const borderCountries = borders?.map(border => border)
    
    const formattedDomain = domains?.join(', ')
    const formattedLanguages = countryLanguages?.join(', ')
    // const formattedBorders = borderCountries?.join(', ')

    const populationFormatted = population?.toLocaleString('en-US', {maximumFractionDigits:2})
    // console.log(populationFormatted)

    // const formatValue = (value) => value?.join(', ')

    const getCountryName = (code) => {
        let countryName;
        const country = data.filter((element)=>{
          return element.alpha3Code === code;
        })  
        countryName = country[0].name
        return countryName;
      }

    const handleReturn = () => {
        navigate('/');
    }
    return (
        <>
        
        <Container width='100%' maxW='1440px' fontSize='16px'  >

        <Box mb='50' >
            <Button
                    onClick={handleReturn}
                    leftIcon={<ArrowBackIcon />} 
                    variant='outline'
                    mt='10'
                    bg={bgColor}
                    shadow='lg'
                >
                        Back
            </Button>
        </Box>
            

            <div className='animate__animated animate__fadeIn'>

        <Flex 
            flexDirection={['column', 'row']}
            justifyContent='flex-start'
            >

        <Skeleton isLoaded={!loading}> 
    <Box 

        // width={['100%', '100']}
        // width='100%'
            // height = 'xl'  
        >
        <Image 
            src={flag}
            alt={name}
            height = {[null,'sm']}
            // height='lg'
            width='xl'
            // maxWidth={['sm','xl']}
            // maxW='1400px'
            // width='90%'
            // height='512px'
            // boxSize='512px'

        />

    </Box>
    </Skeleton>
        <Box 

            ml={[null,'130']}
            mt={['30', '30']}
        >

            <Heading as='h1' fontFamily='Nunito Sans' fontWeight='800' fontSize='32px'>
                {name}
            </Heading>

        <Box 
            lineHeight='taller'
            >

            <Stack direction={['column', 'row']} spacing={['30px','200px']} mt='5' >

            <List fontWeight='300' >
                <ListItem><b>Native name: </b>{nativeName}</ListItem> 
                <ListItem><b>Population: </b>{populationFormatted}</ListItem>
                <ListItem><b>Region: </b>{region}</ListItem>
                <ListItem><b>Sub Region: </b>{subregion}</ListItem>
                {capital &&
                    <ListItem><b>Capital: </b>{capital} </ListItem>}   
            </List>

            <List
                >       
                    <ListItem><b>Top Level Domain: </b>{formattedDomain}</ListItem>
                
                    {countryCurrencies && 
                    <ListItem><b>Currencies: </b>{countryCurrencies} ({countryCurrenciesSymbol})</ListItem> } 
                    <ListItem><b>Languages: </b>{formattedLanguages}</ListItem>
            </List>
            </Stack>
            </Box>


{borders &&

    <Box 
        // display='inline-flex'
        mt='55px'
        // gap='5px'
        display={['inline-block','inline-flex']}
        flexWrap='wrap'
        alignItems='center'
     >

     
    <Text as='h3' flexDirection={['column', null]}>Border Countries: </Text>
 {/* <span> */}

 <Box mb={['50px', null]} >
    
     {borders?.map((element) => { 
         const countryName = getCountryName(element);                                  
         return(
             <Link to={`/country/${countryName}`} key={element} ml='10px' >
             <Button
            //  marginX='1'
            //  marginY='1'
            mr='5px'
            mt='5px'
            
             variant='outline'
             key={element}
             size='sm'
             bg={bgColor}
             fontSize='16px'
             fontWeight='300'
             >
                 {countryName}
             </Button>
                </Link>
                             )
                         })}
                         </Box>
{/* </span> */}

</Box>

}
        </Box>

            </Flex>

        </div>
        
                </Container>
        </>
    )
}
