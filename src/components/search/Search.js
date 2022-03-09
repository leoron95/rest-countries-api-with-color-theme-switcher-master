import React, {useMemo, useState, useEffect} from 'react'

import { CountryCard } from '../countries/CountryCard';
import { CountriesList } from '../countries/CountriesList';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import { useForm } from '../../hooks/useForm';
import {getCountriesByName} from '../../selectors/getCountriesByName';
import {getCountriesByRegion} from '../../selectors/getCountriesByRegion'

import { Input, InputGroup, InputLeftElement, Select,Flex, Box, Spacer, Grid, Skeleton, useColorModeValue} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


export const Search = () => {
    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')
    
    const [ formValues, handleInputChange ] = useForm({
        searchText:''
    } );
    const [selectedRegion, setSelectedRegion] = useState('');
    
    const {data, loading} = useFetchCountries()
    const [countries,setCountries] = useState(data);
    useEffect(() => {
        setCountries(data);
    },[data])
    console.log('Data', countries, loading)
    
    const {searchText} = formValues;

    const handleSearch = (e) => {
        e.preventDefault()
    }

    const handleSelectRegion = (e) => {
        setSelectedRegion(e.target.value);
    }

// const countriesSearch = useMemo(() => getCountriesByName(countries, searchText), [countries, searchText])
const countriesSearch = getCountriesByName(countries, searchText)

// const countriesRegion = useMemo( () => getCountriesByRegion(countries, selectedRegion), [countries, selectedRegion] ) 
const countriesRegion = getCountriesByRegion(countries, selectedRegion)

    return (
        <>
        <Flex width='full'>
            <Box  mt='10' mb='10' >
                <form onSubmit={handleSearch}>
                    <InputGroup  >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                                />

                                <Input type='text'
                                        placeholder='Search for a country...'
                                        className='form-control'
                                        name='searchText'
                                        autoComplete='off'
                                        onChange={handleInputChange}
                                        value={searchText}
                                        width='sm'
                                        size='lg'
                                        shadow='lg'
                                        bg={bgColor}
                                        border='none'
                                        />
                    </InputGroup>
                </form>

        </Box>

        <Spacer />

            <Box mt='10' mb='10'>
                <Select 
                    value={selectedRegion}
                    onChange={handleSelectRegion}
                    placeholder='Filter by Region'
                    shadow='lg'
                    bg={bgColor}
                    color={textColor}
                    border='none'
                    >
                        <option value='Africa'>Africa</option>
                        <option value='Americas'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>

                </Select>
            </Box>
        </Flex>

        {
            (selectedRegion !== '') 
            ?
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
                countriesRegion.map(country => (
                    <CountryCard
                        key={country.name}
                        {...country}
                    />
                    ))
            }
            </Grid>
            : 
            (searchText === '') 
            ?
            <CountriesList data={data} loading={loading} />
            : 
            (searchText !== '') 
            &&
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    {
                        countriesSearch.map(country => (
                            <CountryCard
                                key={country.name}
                                {...country}
                            />
                            ))
                    }
                </Grid>
        }

        </>
    )
}
