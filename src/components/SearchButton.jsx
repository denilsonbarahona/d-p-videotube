import React from 'react';
import '../styles/components/SearchButton.css';

const SearchButton =()=>{
    return (
        <button 
            className='Button SearchButton'
            type='button'>
            <i className='icon-search SearchButton-icon'></i>
        </button>
    )
}

export default SearchButton;