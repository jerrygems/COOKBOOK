import { Routes, Route } from 'react-router-dom'
import React from 'react'
import MainContent from './components/userview/main-content'
import RecipeMenu from './components/recipe-menu'
import CreateRecipes from './components/create-recipe'
import Favourites from './components/userview/favourite'
const RootView = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainContent />} />
      <Route path={"/recipes"} element={<RecipeMenu />} />
      <Route path={"/createrecipes"} element={<CreateRecipes />} />
      <Route path={"/favourites"} element={<Favourites />} />
    </Routes>
  )
}

export default RootView