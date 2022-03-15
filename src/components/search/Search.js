import React, {useState} from 'react'

import { CountryCard } from '../countries/CountryCard';
import { CountriesList } from '../countries/CountriesList';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import { useForm } from '../../hooks/useForm';
import {getCountriesByName} from '../../selectors/getCountriesByName';
import {getCountriesByRegion} from '../../selectors/getCountriesByRegion'

import { Input, InputGroup, InputLeftElement, Select,Flex, Box, Grid, useColorModeValue} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


export const Search = () => {
    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    const bgColor = useColorModeValue('white', 'hsl(209, 23%, 22%)')
    
    const [ formValues, handleInputChange ] = useForm({
        searchText:''
    } );
    const [selectedRegion, setSelectedRegion] = useState('');
    
    const {data, loading} = useFetchCountries()

    const {searchText} = formValues;

    const handleSearch = (e) => {
        e.preventDefault()
    }

    const handleSelectRegion = (e) => {
        setSelectedRegion(e.target.value);
    }

    const countriesSearch = getCountriesByName(data, searchText)

    const countriesRegion = getCountriesByRegion(data, selectedRegion)

    return (
        <>
        <Flex width='full' 
        flexDirection={['column','column', 'row', 'row']}
        justifyContent='space-between'
        >
            <Box  mt='10' 
            mb={['0px', '10px']}
            
            
            >
                <form onSubmit={handleSearch}>
                    <InputGroup  >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.500' />}
                                />

                                <Input type='text'
                                        placeholder='Search for a country...'
                                        className='form-control shadow'
                                        name='searchText'
                                        autoComplete='off'
                                        onChange={handleInputChange}
                                        value={searchText}
                                        width='lg'
                                        size='lg'
                                        bg={bgColor}
                                        border='none'
                                        />
                    </InputGroup>
                </form>

        </Box>


            <Box mt='10' mb='10' >
                <Select 
                    value={selectedRegion}
                    onChange={handleSelectRegion}
                    placeholder='Filter by Region'
                    bg={bgColor}
                    color={textColor}
                    border='none'
                    size='lg'
                    className='shadow regionSelector'
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
            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6}>
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
            <CountriesList data={data} loading={loading}/>
            : 
            (searchText !== '') 
            &&
            <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6}>
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
