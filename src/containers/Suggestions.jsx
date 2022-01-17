import React,{useContext} from 'react';
import PlayItem from './PlayItem';
import AppContext from '../context/AppContext';
import useGetPlayList from '../hooks/useGetPlayList';
import '../styles/containers/Suggestions.css';

const Suggestions =()=>{

    const {state} = useContext(AppContext);    
    if(!state.playlist.length)
        useGetPlayList(); 
        
    return (
        <div className='Suggestions'>
            <h1 className='Suggestions-header'>Videos sugeridos</h1>
            { state.playlist.map(item=>(
                    <PlayItem 
                        key={item.id}
                        item={item}
                        type='suggest'/> 
                ))} 
        </div>
    )
}


export default Suggestions;