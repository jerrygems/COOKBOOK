import React from 'react'
import { Image, Box, Flex, Heading, Text, Badge, Button } from '@chakra-ui/react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function ListTypeC() {
    return (
        <Box maxW="md" m={4} borderWidth={1} borderRadius={8} overflow="hidden">
            <Flex>
                <Image width={100} m={2} objectFit={'cover'} src={'https://github.com/AngelJumbo/gruvbox-wallpapers/blob/main/wallpapers/anime/wall.jpg?raw=true'} alt={'alt text here'} />
                <Box m={2}>
                    <Heading size="sm" mb={2}> title here</Heading>
                    <Text size={'xs'} mb={4}>recipe description</Text>
                    <Flex direction={'column'} justifyContent="space-between" >
                        <Badge colorScheme="green">category of the recipe</Badge>
                        <Text color={'gray'} fontSize={'xs'}>'10' min</Text>
                    </Flex>
                    {/* <Flex direction={'row-reverse'}>
                            <Button size={'sm'} m={1}><FaEdit /> Edit</Button>
                            <Button size={'sm'} bg={'red.700'} m={1}><FaTrash /> Drop</Button>
                        </Flex> */}
                </Box>
            </Flex>
        </Box>
    )
}

export default ListTypeC