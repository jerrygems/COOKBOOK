import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import CardTypeA from '../parts/card-type-a'

function ViewRecipe() {
  return (
    <Flex justifyContent={'center'} direction={'column'} width={'100%'} >
      <Heading m={4}>Preview Recipe :-) </Heading>
      <hr />
      <CardTypeA />
    </Flex>
  )
}

export default ViewRecipe