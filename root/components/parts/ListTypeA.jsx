import React from 'react'
import {Image, Flex, Box, Text, Heading,Badge } from '@chakra-ui/react'

function ListTypeA() {
    return (
        <>
                
                    <Box maxW="sm" m={4} borderWidth={1} borderRadius={8} overflow="hidden">
                        <Image src={'https://github.com/AngelJumbo/gruvbox-wallpapers/blob/main/wallpapers/anime/wall.jpg?raw=true'} alt={'alt text here'} />
                        <Box p={6}>
                            <Heading size="md" mb={2}></Heading>
                            <Text mb={4}>recipe description</Text>
                            <Flex justifyContent="space-between" alignItems="center">
                                <Badge colorScheme="green">category of the recipe</Badge>
                                <br/>
                                <Text fontWeight="bold">'time required 10' min</Text>
                            </Flex>
                        </Box>
                    </Box>
        </>
    )
}

export default ListTypeA