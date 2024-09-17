import React, { useState } from 'react'
import { Button, Box, Center, VStack, Input, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'
import { Search2Icon, SmallAddIcon } from '@chakra-ui/icons'
import { BiSolidImageAdd } from "react-icons/bi";
import QuillEditor from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { MdEdit } from "react-icons/md"


function CreateRecipeForm() {

  const [recipeName, setRecipeName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [content, setContent] = useState("")
  const [creator, setCreator] = useState("")
  const [ingredients, setIngredients] = useState("")

  const handleSubmission = async () => {
    try {
      console.log(recipeName, description, image, content, creator, ingredients)
      if (recipeName && description && content && creator && ingredients) {
        const token = localStorage.getItem("vulntoken")
        const response = fetch(`${process.env.REACT_APP_BACKEND_URL}/api/create/recipe`, {
          method: 'POST',
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ recipeName, description, image, content, creator, ingredients })
        })
        if (response.ok) {
          console.log('created successfull')
        } else {
          console.log("failed to create")
        }
      } else {
        console.log('provide neccessary info')
      }
    } catch (err) {
      console.log(err)
    }
  }

  // here quill stuff
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['image', 'link', 'video', 'code'],
      [{ 'table': 'true' }],
      [{ 'syntax': 'true' }],
      ['clipboard']
    ]

  }
  const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']

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
          <Input placeholder="Recipe Name" type='text' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input placeholder="Recipe Description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
          <InputRightElement>
            <MdEdit />
          </InputRightElement>
        </InputGroup>
        <InputGroup> 
          <Input placeholder="Thumbnail Image For Recipe" value={image} accept='.png' type="file" onChange={(e) => setImage(e.target.files[0])} />
          <InputRightElement>
            <BiSolidImageAdd />
          </InputRightElement>
        </InputGroup>
        <Box>
          <QuillEditor
            theme="snow"
            className='TextEditor'
            value={content}
            formats={formats}
            modules={modules}
            onChange={(value)=>setContent(value)}
          />
        </Box>

        <InputGroup>
          <Input placeholder="Creator Name" value={creator} onChange={(e) => setCreator(e.target.value)} />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <Input placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
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