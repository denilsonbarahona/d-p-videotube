import React, {useContext} from 'react';
import { useParams   } from 'react-router-dom';
import PlayItem from '../containers/PlayItem'; 
import Header from '../containers/Header';
import MainLayout from '../layouts/LayoutMain';
import LayoutPlayList from '../layouts/LayoutPlayList';
import useGetSearchList from '../hooks/useGetSearchList';
import AppContext from '../context/AppContext';
import '../styles/components/tags.css';

const Search =()=>{
    const {state} = useContext(AppContext);
    const {query} = useParams();
    useGetSearchList(query);

 
    return (
        <MainLayout>
            <Header/> 
            <LayoutPlayList>
                { state.searchList.map(item=>(
                        <PlayItem 
                            key={item.id.videoId}
                            item={item}
                            type='play'/> 
                    ))}
            </LayoutPlayList>             
        </MainLayout>
    )
}

export default Search;