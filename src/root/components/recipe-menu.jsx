import React, { useEffect, useState } from 'react'
import { Flex, Link, Heading, Button } from '@chakra-ui/react'
import ListTypeA from './parts/list-type-a'
import { MdAdd } from "react-icons/md";

function RecipeMenu() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    const showRecipe = async () => {
      try {
        const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/get-all-recipes`,)
        if (request.ok) {
          const resp = await request.json()
          setRecipes(resp.message)
        } else {
          console.log("something went wrong")
        }
      } catch (err) {
        console.log(err)
      }
    }
    showRecipe()
  }, [])
  return (
    <>
      <Flex direction={'column'}>
        <Flex flex={'row'} wrap={'wrap'} justifyContent={'space-between'}>
          <Heading m={2}>Recipe Menu</Heading>
          <Button bg={'lime.700'} m={2} rightIcon={<MdAdd />} >Create Recipe</Button>
        </Flex>
        <Flex direction={'row'} wrap={'wrap'} >
          <Link href={'/'}>
            {
              Array.isArray(recipes) && recipes.map((recipe, index) => {
                return (
                  <Link href={`${process.env.REACT_APP_URL}/recipe?id=${recipe._id}`}>
                    <ListTypeA key={index} name={recipe.recipeName} description={recipe.description} content={recipe.content} creator={recipe.creator} ingredients={recipe.ingredients} timeDate={recipe.timeDate} />
                  </Link>
          )
              })
            }
        </Link>

      </Flex>
    </Flex >
    </>
  )
}

export default RecipeMenu