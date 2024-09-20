import './App.css';
import { ChakraProvider, Flex, Center } from '@chakra-ui/react'
import RootView from './root/root-view';
import { BrowserRouter } from 'react-router-dom';
import UserView from './root/user-view';
import React, { useEffect, useState } from 'react';
import Header from './root/components/header';
import Footer from './root/components/footer';
import SideNavBar from './root/components/parts/side-navbar';

function App() {
  const [isAdmin, setAdmin] = useState(false)

  useEffect(()=>{
   try{
    const token = localStorage.getItem('vulntoken')
    if(!token){
      console.log('there is no token')
      return;
    }
    const checkRole = async ()=>{
      const response  = fetch(`${process.env.REACT_APP_BACKEND_URL}/check`,{
        method:"GET",
        headers:{
          "Authorization":`Brearer ${token}`,
          "Content-Type":"application/json"
        }
      })

      if(response.ok){
        const data = await response.json()
        if(data.message.role==="admin"){
          setAdmin(true)
        }else{
          setAdmin(false)
        }
      }else{
        console.log("response not okay")
      }
    }
    checkRole()
   }catch(err){
      console.log(err)
   } 
  },[])

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
