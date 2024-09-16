import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'
import ListTypeC from '../parts/list-type-c'
function Favourites() {
  return (
    <>
      <Box gap={4}>
        <Heading size={'lg'} m={4} >Favourites</Heading>
        <hr />
        <Flex wrap={'wrap'} m={4}>
          <ListTypeC />
          <ListTypeC />
          <ListTypeC />
          <ListTypeC />
        </Flex>
      </Box>
    </>
  )
}

export default Favourites