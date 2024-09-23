import React, { useEffect, useState } from 'react'
import { Image, Flex, Box, Text, Heading, Badge, Button } from '@chakra-ui/react'
import { useIsAdmin } from '../authentication/is-admin-context'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AiFillLike } from "react-icons/ai";


function ListTypeA({ id, image, title, description, creator, ingredients, timeDate }) {
    const { isAdmin } = useIsAdmin()
    const [isFavorited, setIsFavorited] = useState(false);
    const navigate = useNavigate()


    const handleEdit = () => {
        navigate(`/update-recipe/${id}`)
    }
    const handleTrash = async () => {
        try {
            const token = localStorage.getItem('vulntoken')
            console.log(isAdmin)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/delete-recipe?rid=${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                window.location.reload()
            } else {
                console.error('Failed to delete recipe')
            }
        } catch (error) {
            console.error('Error while deleting recipe:', error)
        }
    };
    const handleClicker = () => {
        navigate(`/recipe/${id}`)
    }
    useEffect(() => {
        const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
        setIsFavorited(favoriteRecipes.includes(id));
    }, [id]);

    const toggleFav = async () => {
        try {
            const token = localStorage.getItem('vulntoken')
            const method = isFavorited ? 'DELETE' : 'POST'
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/add-fav`, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recipeId: id })
            });

            if (response.ok) {
                setIsFavorited(!isFavorited);
            } else {
                console.error('failed to update')
            }
        } catch (error) {
            console.error('err updating', error)
        }
    };
    return (
        <>
            <Box maxW="xs" m={4} borderWidth={1} borderRadius={8} overflow="hidden">
                <Image height={200} onClick={handleClicker} src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt={'alt text here'} />
                <Flex direction={'row-reverse'} mt={5} mr={5} fontSize={20} >
                    <AiFillLike onClick={toggleFav} />
                </Flex>
                <Box p={6}>
                    <Heading onClick={handleClicker} size="md" mb={2}>{title}</Heading>
                    <Text onClick={handleClicker} mb={4}>{description}</Text>
                    <Flex onClick={handleClicker} direction={'column'} justifyContent="space-between" alignItems="start">
                        <Badge colorScheme="green">{ingredients}</Badge>
                        <Text fontWeight="bold">{timeDate}</Text>
                        <Text fontWeight="bold">{creator}</Text>
                    </Flex>
                    {
                        isAdmin && (
                            <Flex direction={'row-reverse'}>
                                <Button m={1} onClick={handleEdit}><FaEdit /> Edit</Button>
                                <Button bg={'red.700'} m={1} onClick={handleTrash}><FaTrash /> Drop</Button>
                            </Flex>
                        )
                    }
                </Box>
            </Box>
        </>
    )
}

export default ListTypeA