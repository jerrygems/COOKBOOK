import React from 'react'
import CardTypeA from '../parts/CardTypeA'
import SearchBar from '../parts/SearchBar'
import CreateRecipes from '../CreateRecipes'
import QuillEditorBox from '../parts/QuillEditorBox'
import Auth from '../authentication/Auth'
import ListTypeA from '../parts/ListTypeA'
import Favourites from './Favourites'
import Insights from '../Insights'
import Header from '../Header'
import Footer from '../Footer'
import RecipeMenu from '../RecipeMenu'
import { Flex,Center } from '@chakra-ui/react'
import ListTypeB from '../parts/ListTypeB'
import CreateRecipePage from './CreateRecipePage'

function UserHomeScreen() {

    return (
        <>

            <Center>
                {/* <CreateRecipes /> */}
                <CreateRecipePage/>
            </Center>

            {/* <CardTypeA/> */}
            {/* <SearchBar/> */}
            {/* <QuillEditorBox/> */}
            {/* <Favourites/> */}
            {/* <Header/> */}
            {/* <Insights/> */}
            {/* <Footer/> */}
            {/* <RecipeMenu/> */}
        </>
    )
}

export default UserHomeScreen