import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text, Button } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

function CardTypeA({ tempId }) {
    const recipeId = tempId
    const [recipe, setRecipe] = useState({})
    useEffect(() => {
        const showRecipe = async () => {
            console.log(recipeId)
            const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/get-recipe/${recipeId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (request.ok) {
                const resp = await request.json()
                console.log(resp.message)
                setRecipe(resp.message)
            } else {
                console.log("request failed")
            }
        }
        showRecipe()
    }, [recipeId])
    // const handleLike = () => {
    //     try {

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    return (
        <>
            <Card m={4} width={'100%'}>
                <CardHeader>
                    <Heading size='md'>{recipe.recipeName}</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                summary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {recipe.description}
                            </Text>
                        </Box>

                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                content
                            </Heading>
                            <Box className='ql-editor' dangerouslySetInnerHTML={{ __html: recipe.content }} >

                            </Box>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                ingredients
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {recipe.ingredients}
                            </Text>
                        </Box>
                        <Box>
                            <Button ><FaHeart m={2} /> Like</Button> {/*onClick={handleLike}*/}
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default CardTypeA