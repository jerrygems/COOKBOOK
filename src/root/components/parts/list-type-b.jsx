import React from 'react'
import { Box,Flex,Image,Text,Badge,Heading, Button } from '@chakra-ui/react'
import { FaEdit,FaTrash } from 'react-icons/fa'

function ListTypeB() {
    return (
        <Box maxW="sm" m={4} borderWidth={1} borderRadius={8} overflow="hidden">
            <Image src={'https://github.com/AngelJumbo/gruvbox-wallpapers/blob/main/wallpapers/anime/wall.jpg?raw=true'} alt={'alt text here'} />
            <Box p={6}>
                <Heading size="md" mb={2}></Heading>
                <Text mb={4}>recipe description</Text>
                <Flex direction={'column'} justifyContent="space-between" alignItems="start">
                    <Badge colorScheme="green">category of the recipe</Badge>
                    <Text fontWeight="bold">'10' min</Text>
                </Flex>
                <Flex direction={'row-reverse'}>
                    <Button m={1}><FaEdit/> Edit</Button>
                    <Button bg={'red.700'} m={1}><FaTrash/> Drop</Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default ListTypeB