import { Flex, Heading, Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import ListTypeC from '../parts/list-type-c'
import ListTypeA from '../parts/list-type-a';

function SearchPage() {

  const [searchIt, setSearchIt] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchingFun = async () => {
      if (searchIt.length > 0) { // Only search if there's input
        const token = localStorage.getItem('vulntoken');
        if (token) {
          const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/search-query?q=${searchIt}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          })
          if (request.ok) {
            const resp = await request.json()
            console.log('Got some results:', resp)
            setResults(resp.message || [])
          }
        }
      } else {
        setResults([])
      }
    };

    const debounceTimeout = setTimeout(searchingFun, 300)

    return () => clearTimeout(debounceTimeout)
  }, [searchIt])



  return (
    <>
      <Flex direction={'column'}>
        <Heading textAlign={'start'} m={5}>Search here for the recipes</Heading>
        <Box direction={'column'}>
          {/* searchbar here */}
          <Flex justifyContent={'center'}>
            <InputGroup m={2} width="400">
              <Input placeholder='Search Here' type='text' value={searchIt} onChange={(e) => setSearchIt(e.target.value)} />
              <InputRightElement>
                <SearchIcon color='green.500' />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex direction={'row'} wrap={'wrap'} width={'100%'} justifyContent={'center'}>
            {
              Array.isArray(results) && results.map((result, index) => {
                return (
                  <ListTypeA key={index} id={result._id} image={result.image} name={result.recipeName} description={result.description} content={result.content} creator={result.creator} ingredients={result.ingredients} timeDate={result.timeDate} />
                )
              })
            }
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default SearchPage