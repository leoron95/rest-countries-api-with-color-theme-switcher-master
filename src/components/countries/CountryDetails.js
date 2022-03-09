import React, {useEffect, useMemo, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {getCountry} from '../../selectors/getCountry'
import {useFetchCountries} from '../../hooks/useFetchCountries';

import { Box, Center, Text, Flex, Spacer, Square, Grid, GridItem, Skeleton } from '@chakra-ui/react'
import { Button, ButtonGroup, Image,Container, Heading} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Header } from '../ui/Header';
import { useFetch } from '../../hooks/useFetch';

export const CountryDetails = () => {

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
        
        <Container maxW='8xl'  >

            
        
        {/* <div>
            <Header/>
        </div> */}
        <Box mb='50' >
            <Button
                    onClick={handleReturn}
                    leftIcon={<ArrowBackIcon />}
                    colorScheme='gray'  
                    variant='solid'
                    mt='10'
                    // ml='10'
                    
                    
                >
                        Back
            </Button>
        </Box>
            

            {/* <div className='animate__animated animate__fadeIn'> */}
        {/* <Flex justifyContent='space-between'> */}
        <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' > 


        <Skeleton isLoaded={!loading}> 
    <Box gridRowStart='1'
        gridColumnStart='1'
        gridRowEnd='2'
        gridColumnEnd='2'
        // justifyContent='flex-start'  
        width='xl' 
        height = 'lg'  
        // overflow='hidden'
        
        >
        <Image 
            // boxSize='512px'
            // fit='fill'
            // height='sm'
            // objectFit='cover'
            src={flag}
            alt={name}
        />
    </Box>
    </Skeleton>
    
   
        <Box gridRowStart='1'
        gridColumnStart='2'
        gridRowEnd='2'
        gridColumnEnd='4'
        ml='50'
        mt='50'
            
            // width='lg'
            // height = 'lg'
            // lineHeight='taller'
            // ml='200'
            // mt='50'
        >
            <Heading>
               {name}
           </Heading>

        

        <Box 
            lineHeight='taller'>
        <div className='list'>
            <ul>
                <li><b>Native name: </b>{nativeName}</li>
                <li><b>Population: </b>{populationFormatted}</li>
                <li><b>Region: </b>{region}</li>
                <li><b>Sub Region: </b>{subregion}</li>
                {capital && <li><b>Capital: </b>{capital}</li>}
                
    
                {/* <h3><b>Native name: </b>{nativeName}</h3>
                <h3><b>Population: </b>{populationFormatted}</h3>
                <h3><b>Region: </b>{region}</h3>
                <h3><b>Sub Region: </b>{subregion}</h3>
                <h3><b>Capital: </b>{capital}</h3> */}


                {/* <li><b>Top Level Domain: </b>{formattedDomain}</li>
                <li><b>Currencies: </b>{countryCurrencies} ({countryCurrenciesSymbol})</li>
                <li><b>Languages: </b>{formattedLanguages}</li> */}


            </ul>

                {/* <li><b>Top Level Domain: </b>{formattedDomain}</li>
                <li><b>Currencies: </b>{countryCurrencies} ({countryCurrenciesSymbol})</li>
                <li><b>Languages: </b>{formattedLanguages}</li> */}
                {/* <li>
                <h3><b>Top Level Domain: </b>{formattedDomain}</h3>
                <h3><b>Currencies: </b>{countryCurrencies} ({countryCurrenciesSymbol})</h3>
                <h3><b>Languages: </b>{formattedLanguages}</h3>
                </li> */}
                <ul>
                <li><b>Top Level Domain: </b>{formattedDomain}</li>
               {countryCurrencies && <li><b>Currencies: </b>{countryCurrencies} ({countryCurrenciesSymbol})</li> } 
                <li><b>Languages: </b>{formattedLanguages}</li>
                </ul>

            
        </div>
        </Box>

        

    
        

        
        {borders &&

           <Box gridRowStart='2'
        gridColumnStart='2'
        gridRowEnd='3'
        gridColumnEnd='4'
        mt='55'>
           
               <b>Border Countries:</b> 
            <span>
               
                {borders?.map((element) => { 
                    const countryName = getCountryName(element);                                  
                    return(
                        <Link to={`/country/${countryName}`} key={element} >
                        <Button 
                        marginX='2'
                        variant='outline'
                        key={element}
                        size='sm'
                        
                        >
                            {countryName}
                        </Button>
                           </Link>
                                        )
                                    })}
           </span>
           
           </Box>
           
}

           
        

        </Box>

        {/* <Box 
        mt='132' 
        lineHeight='taller'>
        <li><b>Top Level Domain: </b>{formattedDomain}</li>
                <li><b>Currencies: </b>{countryCurrencies} ({countryCurrenciesSymbol})</li>
                <li><b>Languages: </b>{formattedLanguages}</li>
        </Box> */}
            {/* </Flex> */}
        {/* </div> */}
        </Grid>
        
        
                </Container>
        </>
    )
}
