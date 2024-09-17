import React from 'react'
import {Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBar() {
    return (
        <Flex justifyContent={'center'}>
            <InputGroup m={2} width="400">
                <Input placeholder='Search Here' />
                <InputRightElement>
                    <SearchIcon color='green.500' />
                </InputRightElement>
            </InputGroup>
        </Flex>
    )
}

export default SearchBar