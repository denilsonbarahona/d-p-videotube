import React, {useContext} from 'react';
import CategoriesList from '../containers/CategoriesList';
import PlayItem from '../containers/PlayItem'; 
import Header from '../containers/Header';
import MainLayout from '../layouts/LayoutMain';
import LayoutPlayList from '../layouts/LayoutPlayList';
import useGetPlayList from '../hooks/useGetPlayList';
import AppContext from '../context/AppContext';
import '../styles/components/tags.css';

const Home =()=>{
    const {state} = useContext(AppContext);
    useGetPlayList();

    return (
        <MainLayout>
            <Header/>
            <CategoriesList/> 
            <LayoutPlayList>
                { state.playlist.map(item=>(
                        <PlayItem 
                            key={item.id}
                            item={item}
                            type='play'/> 
                    ))}
            </LayoutPlayList>
           {/* <VideoCurrentPlaying/> */}               
        </MainLayout>
    )
}

export default Home;