import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ListTypeA from '../parts/ListTypeA'
function Favourites() {
  return (
    <>
      <Box gap={6}>
        <Flex wrap={'wrap'}>
          <ListTypeA />
          <ListTypeA />
          <ListTypeA />
          <ListTypeA />
          <ListTypeA />
          <ListTypeA />
          <ListTypeA />
          <ListTypeA />
        </Flex>
      </Box>
    </>
  )
}

export default Favourites