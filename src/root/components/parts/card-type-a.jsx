import React from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Text, Button } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

function CardTypeA() {

    const handleLike = () => {
        try {
          
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Card m={4} width={'100%'}>
                <CardHeader>
                    <Heading size='md'>Recipe name</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Description of the Recipe
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                        <Box>
                            <Button onClick={handleLike}><FaHeart m={2} /> Like</Button>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default CardTypeA