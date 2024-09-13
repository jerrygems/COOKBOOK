import React from 'react'
import { ListItem,List, Box, Text, VStack, Heading } from '@chakra-ui/react'

function ListTypeA() {
    return (
        <>
            <List>
                <ListItem>
                    <VStack>
                        <Box>
                            <Heading>Title</Heading>
                        </Box>
                        <hr/>
                        <Box>
                            <Text>Instructions</Text>
                        </Box>
                        <hr/>
                        <Box>
                            <Text>ingredients</Text>
                        </Box>
                        <hr/>
                        <Box>
                            <Text>Posted By: username || At: 12/09/24</Text>
                        </Box>
                    </VStack>
                </ListItem>
            </List>
        </>
    )
}

export default ListTypeA