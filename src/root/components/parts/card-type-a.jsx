import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text, Button } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

function CardTypeA() {
    const [recipe, setRecipe] = useState([])
    const tempid = "66ed025b1c11e258fbd5da24"
    useEffect(() => {
        const showRecipe = async () => {
            const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/get-recipe?id=${tempid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (request.ok) {
                const resp = await request.json()
                console.log(resp.message)
                setRecipe(resp.message)
            }else{
                console.log("request failed")
            }
        }
        showRecipe()
    }, [])
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
                                ingredients
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {recipe.ingredients}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                here you needa show the number of users that have added this in fav list
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