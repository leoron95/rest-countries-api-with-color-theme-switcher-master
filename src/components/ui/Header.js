import React from 'react'
import { Button, Flex, Heading, Container, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'



export const Header = ({bgColor}) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const textColor = useColorModeValue('hsl(200, 15%, 8%)', 'white')
    
    return (
        <>
        <Container 
            bg={bgColor} 
            color={textColor} 
            maxW={[null,'1440px']}
            paddingX={['0px','16px']}
        >
        <Flex  justifyContent='space-between' >

        <Heading mt='5' mb='5' as='h1'  fontSize={['sm','28px']}  fontFamily='Nunito Sans' fontWeight='800' >Where in the World?</Heading>

            <Button
                    leftIcon={colorMode === 'light' ? <MoonIcon  /> : <SunIcon />}
                    colorScheme='black' 
                    variant='unstyled'
                    mt='4' mb='4'
                    size={['sm','md']}
                    fontSize={['sm','md']}
                    width='fit-content'
                    onClick={toggleColorMode}
                    // _focus={{ boxShadow: "none", }}
                    >
                        {colorMode === 'light' ? 'Dark' : 'Light'} Mode 
                </Button>

        </Flex>
        </Container>

        </>
    )
}
