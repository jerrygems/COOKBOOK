import React from 'react'
import { Image, Flex, Box, Text, Heading, Badge } from '@chakra-ui/react'

function ListTypeA({title,description,creator,ingredients,timeDate}) {
    return (
        <>
            <Box maxW="xs" m={4} borderWidth={1} borderRadius={8} overflow="hidden">
                <Image src={'https://github.com/AngelJumbo/gruvbox-wallpapers/blob/main/wallpapers/anime/wall.jpg?raw=true'} alt={'alt text here'} />
                <Box p={6}>
                    <Heading size="md" mb={2}>{title}</Heading>
                    <Text mb={4}>{description}</Text>
                    <Flex direction={'column'} justifyContent="space-between" alignItems="start">
                        <Badge colorScheme="green">{ingredients}</Badge>
                        <Text fontWeight="bold">{timeDate}</Text>
                        <Text fontWeight="bold">{creator}</Text>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default ListTypeA