import React from 'react';
import SearchButton from './SearchButton';
import '../styles/components/Search.css';

const SearchForm=()=>{
    return (
        <React.Fragment>
            <form className='Search'>
                <input 
                    className='Search-input'
                    placeholder='Buscar video'
                    />
                <SearchButton/>
            </form>
            <SearchButton/>
        </React.Fragment>
    )
}


export default SearchForm;