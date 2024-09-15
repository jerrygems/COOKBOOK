import React from 'react'
import { Flex,HStack } from '@chakra-ui/react'
import ListTypeA from './parts/ListTypeA'
function RecipeMenu() {
  return (
    <>
      <HStack>
        <ListTypeA />
        <ListTypeA />
        <ListTypeA />
      </HStack>
    </>
  )
}

export default RecipeMenu