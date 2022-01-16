import React, {useRef} from 'react';
import SearchButton from './SearchButton';
import { useNavigate } from 'react-router-dom'; 
import '../styles/components/Search.css';

const SearchForm=()=>{
    const refSearch = useRef(null);
    const navigate = useNavigate();
    const onSubmitForm=()=>{
        const formData = new FormData(refSearch.current);
        navigate(`/search/${formData.get("search-input")}`)
    }

    return (
        <React.Fragment>
            <form 
                ref={refSearch}
                className='Search'>
                <input 
                    name="search-input"
                    className='Search-input'
                    placeholder='Buscar video'
                    />
                <SearchButton 
                    click={onSubmitForm}/>
            </form>
       {/*      <SearchButton/> */}
        </React.Fragment>
    )
}


export default SearchForm;