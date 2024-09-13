import { Routes, Route } from 'react-router-dom'
import React from 'react'
import MainContent from '../components/MainContent'
import RecipeMenu from '../components/RecipeMenu'
import Dashboard from '../components/Dashboard'
import CreateRecipes from '../components/CreateRecipes'
import Favourites from '../components/Favourites'
import Auth from '../components/authentication/Auth'
const RootView = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainContent />} />
      <Route path={"/recipes"} element={<RecipeMenu />} />
      <Route path={"/createrecipes"} element={<CreateRecipes />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/login"} element={<Auth />} />
      <Route path={"/favourites"} element={<Favourites />} />
    </Routes>
  )
}

export default RootView