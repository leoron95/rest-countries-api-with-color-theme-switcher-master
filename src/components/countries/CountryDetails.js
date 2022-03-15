import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {getCountry} from '../../selectors/getCountry'
import {useFetchCountries} from '../../hooks/useFetchCountries';
import { Box, useColorModeValue, List, ListItem, Stack,Text, Button, Image,Container, Heading} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';


export const CountryDetails = () => {

    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')

    const {countryName} = useParams();
    const {data} = useFetchCountries()
    
    const country = getCountry(data, countryName)

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
    
    const formattedDomain = domains?.join(', ')
    const formattedLanguages = countryLanguages?.join(', ')

    const populationFormatted = population?.toLocaleString('en-US', {maximumFractionDigits:2})


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

        <Stack direction={['column','row']}>
            <Box><Button
                    onClick={handleReturn}
                    leftIcon={<ArrowBackIcon />} 
                    variant='outline'
                    mt='10'
                    bg={bgColor}
                    shadow='lg'
                    width='fit-content'
                >
                        Back
            </Button></Box>
        
        </Stack>
        <div className='animate__animated animate__fadeIn'>

        <Stack direction={['column','column','column','row']} paddingTop={20} 
         spacing={[null,150]} 
        
        >

           <Image 
            src={flag}
            alt={name}
            width={512}
            height='fit-content'
        />


        <Stack 
        direction='column'
        >
        
        <Box mt={['30px',null]} mb={['20px','10px']} >
        <Heading as='h1' fontFamily='Nunito Sans' fontWeight='800' fontSize='32px'>
                {name}
            </Heading></Box>
        

            <Stack direction={['column','row']} 
            spacing={[10,100]}
            lineHeight='taller'
            >
            <List fontWeight='300' 

            >
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

            <Stack>

                {
                    borders &&
                    
                    
                    <Stack direction='row' flexWrap='wrap'  alignItems='center' mt='30px'  mb={['30px',null]}>
                        
                        <Stack>
                            <Text  fontWeight='600'>Borders countries: </Text>
                        </Stack>
                    
                    {borders?.map((element) => {

                        const countryName = getCountryName(element);

                        return(
                            <Link to={`/country/${countryName}`} key={element} ml='10px' >
                            
                            <Button
                                    mt='5px'
                                    variant='outline'
                                    key={element}
                                    size={'sm'}
                                    bg={bgColor}
                                    fontSize='14px'
                                    fontWeight='300'
                            >
                                {countryName}
                            </Button>
                                </Link>
                                            )
                                        })}
                    </Stack>
                                
                }
                </Stack>
            
                
            </Stack>
        </Stack>
        </div>
         
                </Container>
        </>
    )
}
