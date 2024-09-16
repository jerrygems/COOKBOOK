import { Flex,Heading,Box } from '@chakra-ui/react'
import React from 'react'
import SearchBar from '../parts/search-bar'
import ListTypeC from '../parts/list-type-c'

function SearchPage() {
  return (
    <>
    <Flex direction={'column'}>
        <Heading textAlign={'start'} m={5}>Search here for the recipes</Heading>
        <Box direction={'column'}>
            <SearchBar />
            <Flex direction={'row'} wrap={'wrap'} width={'100%'} justifyContent={'center'}>
                <ListTypeC />
                <ListTypeC />
                <ListTypeC />
                <ListTypeC />
                <ListTypeC />
            </Flex>
        </Box>
    </Flex>
    </>
  )
}

export default SearchPage