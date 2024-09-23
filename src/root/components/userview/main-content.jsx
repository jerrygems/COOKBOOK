import React from 'react'
import CreateRecipes from '../create-recipe'
import QuillEditorBox from '../parts/quill-editor-box'
import ListTypeA from '../parts/list-type-a'
import Favourites from './favourite'
import Insights from '../insights'
import Header from '../header'
import Footer from '../footer'
import RecipeMenu from '../recipe-menu'
import ViewRecipe from './view-recipe'

function MainContent() {

  return (
    <>
      <ViewRecipe/>
      {/* <CreateRecipes/>  */}
      {/* <QuillEditorBox/> */}
      {/* <Favourites/> */}
      {/* <Header/> */}
      {/* <Insights/> */}
      {/* <Footer/> */}
      {/* <RecipeMenu/> */}
    </>
  )
}

export default MainContent