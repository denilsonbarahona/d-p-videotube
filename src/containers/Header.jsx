import React from 'react';
import Logo from '../components/Logo';
import SearchForm from '../components/SearchForm';
import LayoutHeader from '../layouts/LayoutHeader';

const Header=()=>{
    return (
        <LayoutHeader>
            <Logo/>
            <SearchForm/>
        </LayoutHeader>
    )
}

export default Header;
