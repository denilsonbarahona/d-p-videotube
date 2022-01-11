import React from 'react';
import CategoriesList from '../containers/CategoriesList';
import PlayItem from '../containers/PlayItem';
import SuggestItem from '../containers/SuggestItem';
import Header from '../containers/Header';
import '../styles/components/tags.css';

const Home =()=>{
    return (
        <>
            <h1>Home</h1>
            <Header/>
            <CategoriesList/>            
            <PlayItem/> 
            <SuggestItem/>
        </>
    )
}

export default Home;