import React from 'react'
import { Flex, Link, Heading, Button } from '@chakra-ui/react'
import ListTypeA from './parts/list-type-a'
import { MdAdd } from "react-icons/md";

function RecipeMenu() {
  return (
    <>
      <Flex direction={'column'}>
        <Flex flex={'row'} wrap={'wrap'} justifyContent={'space-between'}>
          <Heading m={2}>Recipe Menu</Heading>
          <Button bg={'lime.700'} m={2} rightIcon={<MdAdd />} >Create Recipe</Button>
        </Flex>
        <Flex direction={'row'} wrap={'wrap'} >
          <Link href={'/'}><ListTypeA /></Link>
          <Link href={'/'}><ListTypeA /></Link>
          <Link href={'/'}><ListTypeA /></Link>
          
        </Flex>
      </Flex>
    </>
  )
}

export default RecipeMenu