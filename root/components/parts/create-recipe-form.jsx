import React, { useState } from 'react'
import { Button, Box, Center, VStack, Input, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'
import { ArrowUpIcon, Search2Icon, SmallAddIcon } from '@chakra-ui/icons'
import { BiSolidImageAdd } from "react-icons/bi";
import QuillEditorBox from './quill-editor-box'
import { MdEdit } from "react-icons/md";

function CreateRecipeForm() {

  const [recipeName, setRecipeName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")
  const [creator, setCreator] = useState("")
  const handleSubmission = async () => {
    try {
      
    } catch (err) {
      console.log(err)
    }
  }

  return (

    <VStack
      m={4}
      spacing={4}
      bg="white"
      p={8}
      boxShadow="md"
      borderRadius="md"
      width={{ base: "90%", sm: "600px" }}
    >
      <Center>
        <Heading size="lg">Create Recipes</Heading>
      </Center>
      <hr />
      <VStack spacing={4} width="100%">
        <InputGroup>
          <Input placeholder="Recipe Name" />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input placeholder="Recipe Description" />
          <InputRightElement>
            <MdEdit />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input placeholder="Thumbnail Image For Recipe" type="file" />
          <InputRightElement>
            <BiSolidImageAdd />
          </InputRightElement>
        </InputGroup>
        <Box>
          <QuillEditorBox /> {/*quill editor here*/}
        </Box>

        <InputGroup>
          <Input placeholder="Creator Name" />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <Input placeholder="Ingredients" />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
      </VStack>
      <Box width="100%">
        <Button colorScheme="teal" size="md" width="full" onClick={handleSubmission}>
          Create Recipe
        </Button>
      </Box>
    </VStack>
  )
}

export default CreateRecipeForm