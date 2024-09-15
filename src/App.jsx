import './App.css';
import { ChakraProvider, Flex, Center } from '@chakra-ui/react'
import RootView from '../root/RootView';
import { BrowserRouter } from 'react-router-dom';
import UserView from '../root/UserView';
import React, { useState } from 'react';
import Header from '../root/components/Header';
import Footer from '../root/components/Footer';
import SideNavBar from '../root/components/parts/SideNavBar';

function App() {
  const [isAdmin, setAdmin] = useState(false)

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Flex direction={'row'} justifyContent={'center'}>
            {isAdmin ? <SideNavBar /> : <SideNavBar />}
            {isAdmin ? <RootView /> : <UserView />}
          </Flex>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
