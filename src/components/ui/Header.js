import React from 'react'
import { Button, Flex, Heading, Spacer, Box, Container, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


export const Header = ({bgColor}) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    
    return (
        <>
        <Container maxW='8xl' centerContent bg={bgColor} color={textColor}>
        <Flex width='full' height='full' >
        <Box >
            <Heading mt='5' mb='5' size='md'>Where in the World?</Heading>
        </Box>
        <Spacer />
      

            
            <Box >
                <Button
                    leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    colorScheme='black' 
                    variant='unstyled'
                    mt='4' mb='4'
                    size='md'
                    width='fit-content'
                    onClick={toggleColorMode}
                    >
                        {colorMode === 'light' ? 'Dark' : 'Light'} Mode 
                </Button>

            </Box>

        </Flex>
        </Container>

        </>
    )
}
