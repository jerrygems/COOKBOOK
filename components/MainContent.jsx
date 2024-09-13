import React from 'react'
import CardTypeA from './parts/CardTypeA'
import SearchBar from './parts/SearchBar'
import CreateRecipes from './CreateRecipes'
import QuillEditorBox from './parts/QuillEditorBox'
import Auth from './authentication/Auth'
import ListTypeA from './parts/ListTypeA'
import Favourites from './Favourites'
function MainContent() {

  return (
    <>
      {/* <CardTypeA/> */}
      {/* <SearchBar/> */}
      {/* <CreateRecipes/>  */}
      {/* <QuillEditorBox/> */}
      {/* <Auth/> */}
      <Favourites/>
    </>
  )
}

export default MainContent