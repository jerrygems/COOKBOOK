import { InputRightElement, Flex, Box, VStack, InputGroup, Input, Heading, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AtSignIcon, } from '@chakra-ui/icons'
import { FaUser } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";


function Auth() {

  const [isLogin, setLogin] = useState(true)
  const toggleForm = () => {
    setLogin(!isLogin)
  }


  return (
    <>
      <Flex>
        <VStack>
          <Heading>
            {isLogin ? 'Login' : 'Register'} Form
          </Heading>
          {isLogin ? (
            <Box>
              <InputGroup>
                <Input />
                <InputRightElement>
                  <AtSignIcon />
                </InputRightElement>
              </InputGroup>
              <br/>
              <InputGroup>
                <Input />
                <InputRightElement>
                  <BiSolidHide />
                </InputRightElement>
              </InputGroup>
            </Box>
          ) : (
            <Box>
              <InputGroup>
                <Input />
                <InputRightElement>
                  <FaUser />
                </InputRightElement>
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <InputRightElement>
                  <AtSignIcon />
                </InputRightElement>
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <InputRightElement>
                  <BiSolidHide />
                </InputRightElement>
              </InputGroup>
              <br />
              <InputGroup>
                <Input />
                <InputRightElement>
                  <BiSolidHide />
                </InputRightElement>
              </InputGroup>
            </Box>
          )}
          <br /><br />
          <Button>{isLogin ? 'Login' : 'Register'}</Button>
        </VStack>
      </Flex>
    </>
  )



}

export default Auth