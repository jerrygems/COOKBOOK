import React from 'react'
import Favourites from './components/userview/Favourites'
import { Route, Routes } from 'react-router-dom'
import UserHomeScreen from './components/userview/UserHomeScreen'

function UserView() {
  return (
    <Routes>
      <Route path='/' element={<UserHomeScreen/>} />
      <Route path='/fav' element={<Favourites/>} />
      
    </Routes>
  )
}

export default UserView