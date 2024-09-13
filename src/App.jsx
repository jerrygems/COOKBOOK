import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import RootView from '../root/RootView';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <ChakraProvider> 
        <BrowserRouter>
          <RootView />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
