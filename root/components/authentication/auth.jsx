import {
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Input,
  ModalFooter,
} from '@chakra-ui/react'
import React, { useState } from 'react'



function Auth({ isOpen, onClose, isSignUp }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const registerForm = async () => {
    const response = await fetch("http://0.tcp.in.ngrok.io:11225/api/check",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      }      
    })
    if (response.status==200){
      console.log(response.data)
    }
    console.log(response)
  }

  const loginForm = async () => {

  }
  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isSignUp ? 'Register' : 'Login'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="email" mb={3} value={email} onChange={setEmail(email)} />
            <Input placeholder="password" type="password" mb={3} value={password} onChange={setPassword(password)} />
            {
              isSignUp ?
                (<Input placeholder="Confirm Password" type="password" value={confPassword} onChange={setConfPassword(confPassword)} />) : (<></>)
            }
          </ModalBody>
          <ModalFooter>
            {
              isSignUp ?
                (<Button onClick={registerForm} colorScheme="blue" mr={3}>
                  Register
                </Button>) :
                (<Button onClick={loginForm} colorScheme="blue" mr={3}>
                  Login
                </Button>)
            }
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  )



}

export default Auth