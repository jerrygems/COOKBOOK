import React from 'react'
import {Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

function SearchBar() {
    return (
        <InputGroup>
            <Input placeholder='Enter amount' />
            <InputRightElement>
                <SearchIcon color='green.500' />
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchBar