import { InputRightElement, Flex, Box, VStack, InputGroup, Input, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { AtSignIcon, } from '@chakra-ui/icons'
import { FaUser } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";


function Auth() {


  return (
    <>
      {/* <Flex>
          <VStack>
            <Heading>
              Login Form
            </Heading>
            <Box>
              <InputGroup>
                <Input />
                <InputRightElement>
                  <AtSignIcon />
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Input />
                <InputRightElement>
                  <BiSolidHide />
                </InputRightElement>
              </InputGroup>
            </Box>
            <br /><br />
            <Button>Login</Button>
          </VStack>
        </Flex> */}

      <Flex>
        <VStack>
          <Heading>
            Register Form
          </Heading>
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
          <br /><br />
          <Button>Rgister</Button>
        </VStack>
      </Flex>
    </>
  )



}

export default Auth