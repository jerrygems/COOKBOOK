import React from 'react'
import CardTypeA from '../parts/card-type-a'
import SearchBar from '../parts/search-bar'
import CreateRecipes from '../create-recipe'
import QuillEditorBox from '../parts/quill-editor-box'
import Auth from '../authentication/auth'
import ListTypeA from '../parts/list-type-a'
import Favourites from './favourite'
import Insights from '../insights'
import Header from '../header'
import Footer from '../footer'
import RecipeMenu from '../recipe-menu'
import { Flex,Heading } from '@chakra-ui/react'
import ListTypeB from '../parts/list-type-b'
import CreateRecipePage from './create-recipe-page'

function UserHomeScreen() {

    return (
        <>

            <Flex justifyContent={'start'} direction={'column'}>
                <Heading m={6}>Latest ;-)</Heading>
                <hr/>
                <Flex direction={'row'} wrap={'wrap'}>
                    <ListTypeA/>
                    <ListTypeA/>
                    <ListTypeA/>
                    <ListTypeA/>
                </Flex>    
                <hr/>            
                <Heading m={6}>By Date :-)</Heading>
                <hr/>
                <Flex direction={'row'} wrap={'wrap'}>
                    <ListTypeA/>
                    <ListTypeA/>
                    <ListTypeA/>
                    <ListTypeA/>
                </Flex>    
                <hr/>            
            </Flex>

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