import './App.css';
import { ChakraProvider, Flex, Center } from '@chakra-ui/react'
import RootView from '../root/root-view';
import { BrowserRouter } from 'react-router-dom';
import UserView from '../root/user-view';
import React, { useEffect, useState } from 'react';
import Header from '../root/components/header';
import Footer from '../root/components/footer';
import SideNavBar from '../root/components/parts/side-navbar';

function App() {
  const [isAdmin, setAdmin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      console.log('no token found');
      return;
    }
    const checkRole = async () => {
      try {
        const response = await fetch(`localhost:4000/user/check`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.message === 'admin') {
            setAdmin(true);
          } else {
            console.log('User is not an admin');
          }
        }

      } catch (error) {
        console.error(error);
      }
    };
  })

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
