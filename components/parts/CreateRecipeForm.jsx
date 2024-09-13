import React from 'react'
import { Button, Box, Center, Flex, VStack, Input, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'
function CreateRecipeForm() {
    return (
        <Flex>
            <VStack>
                <Center>
                    <Heading>Create Recipes</Heading>
                    <br /><br /><br />
                    <hr></hr>
                </Center>
                <VStack>
                    <InputGroup>
                        <Input placeholder="Recipe Name" />
                        <InputRightElement>
                            <SmallAddIcon />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Recipe Description" />
                        <InputRightElement>
                            <SmallAddIcon />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Thumnail Image For Recipe" type='file' />
                        <InputRightElement>
                            <SmallAddIcon />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Creator Name" />
                        <InputRightElement>
                            <SmallAddIcon />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Ingredients" />
                        <InputRightElement>
                            <SmallAddIcon />
                        </InputRightElement>
                    </InputGroup>
                </VStack>
                <br/>
                <Box>
                    <Button colorScheme='teal' size='md'>
                        Button
                    </Button>
                </Box>
            </VStack>
        </Flex>
    )
}

export default CreateRecipeForm