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
import React from 'react'



function Auth({ isOpen, onClose, isSignUp }) {


  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isSignUp ? 'Register' : 'Login'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Email" mb={3} />
            <Input placeholder="Password" type="password" mb={3} />
            {
              isSignUp ?
                (<Input placeholder="Confirm Password" type="password" />) : (<></>)
            }
          </ModalBody>
          <ModalFooter>
            {
              isSignUp ?
                (<Button colorScheme="blue" mr={3}>
                  Register
                </Button>) :
                (<Button colorScheme="blue" mr={3}>
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