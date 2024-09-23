import React, { useEffect, useState } from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'
import ListTypeC from '../parts/list-type-c'
function Favourites() {
  const [results, setResults] = useState([])
  useEffect(() => {
    const getallfavs = async (req, resp) => {
      const token = localStorage.getItem("vulntoken")
      const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/get-favs`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
      if(request.ok){
        const res = request.json()
        console.log(res)
        setResults(res)
      }
      console.log("failed fetching data")
    }
    getallfavs()
  }, [])
  return (
    <>
      <Box gap={4}>
        <Heading size={'lg'} m={4} >Favourites</Heading>
        <hr />
        <Flex wrap={'wrap'} m={4}>
          <ListTypeC />
        </Flex>
      </Box>
    </>
  )
}

export default Favourites