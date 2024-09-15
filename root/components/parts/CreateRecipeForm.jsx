import React from 'react'
import { CheckboxGroup, Checkbox, FormControl, FormLabel, Stack, Button, Box, Center, VStack, Input, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'
import QuillEditorBox from './QuillEditorBox'
function CreateRecipeForm() {
  // const [selectedIngredients, setSelectedIngredients] = useState([]);

  // const ingredients = [
  //   'Flour',
  //   'Sugar',
  //   'Eggs',
  //   'Milk',
  //   'Butter',
  //   'Vanilla',
  //   'Baking Powder',
  //   'Salt',
  //   'Baking Soda',
  //   'Cocoa Powder',
  //   'Cinnamon',
  //   'Nutmeg',
  //   'Ginger',
  //   'Cloves',
  //   'Allspice',
  //   'Cardamom',
  //   'Cumin',
  //   'Coriander',
  //   'Turmeric',
  //   'Paprika',
  // ];
  // const handleIngredientChange = (values) => {
  //   setSelectedIngredients(values);
  // };
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
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input placeholder="Thumbnail Image For Recipe" type="file" />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>
        <QuillEditorBox />
        <InputGroup>
          <Input placeholder="Creator Name" />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>
        {/* <FormControl>
          <FormLabel>Ingredients</FormLabel>
          <CheckboxGroup
            colorScheme="teal"
            value={selectedIngredients}
            onChange={handleIngredientChange}
          >
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {ingredients.map((ingredient) => (
                <Checkbox key={ingredient} value={ingredient}>
                  {ingredient}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </FormControl> */}
        <InputGroup>
          <Input placeholder="Ingredients" />
          <InputRightElement>
            <SmallAddIcon />
          </InputRightElement>
        </InputGroup>
      </VStack>
      <Box width="100%">
        <Button colorScheme="teal" size="md" width="full">
          Create Recipe
        </Button>
      </Box>
    </VStack>
  )
}

export default CreateRecipeForm