import React, { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Heading,
  Flex,
  Link,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Auth from './authentication/auth';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const [isSignUp, setSignUp] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('vulntoken');
    setIsLoggedIn(token)
  }, [])

  const handleLoginClick = () => {
    setSignUp(false)
    onOpen()
  }
  const handleSignUpClick = () => {
    setSignUp(true)
    onOpen()
  }

  const handleLogout = () => {
    localStorage.removeItem('vulntoken')
    setIsLoggedIn(false)
  };
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="#1a202c"
        color="white"
      >
        <Flex align="center" mr={5}>
          <Heading onClick={() => { navigate('/') }} as="h1" size="lg" letterSpacing={"tighter"}>
            CookBook
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Text onClick={() => { navigate('/recipes') }}>Recipes</Text>
          <Text onClick={() => { navigate('/search') }}>Search</Text>
          <Text onClick={() => { navigate('/favourites') }}>Favourite</Text>
        </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          {isLoggedIn ? (
            <Button className='spacezoner'
              variant="outline"
              color="white.700"
              onClick={handleLogout}
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button className='spacezoner'
                variant="outline"
                color="white.700"
                onClick={handleLoginClick}
                _hover={{ bg: "teal.700", borderColor: "teal.700" }}
              >
                Login
              </Button>
              <Button className='spacezoner'
                variant="outline"
                color="white.700"
                onClick={handleSignUpClick}
                _hover={{ bg: "teal.700", borderColor: "teal.700" }}
              >
                SignUp
              </Button>
            </>
          )}
        </Box>
      </Flex>

      {/* here the model for the login stuff  */}
      <Auth isOpen={isOpen} onClose={onClose} isSignUp={isSignUp} />

    </>
  )
}

export default Header