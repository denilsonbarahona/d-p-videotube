import React from 'react';
import Thumbnail from '../components/Thumbnail';
import LayoutPlayItem from '../layouts/LayoutPlayItem';
import PlayDescription from '../components/PlayDescription';


const PlayItem =()=>{
    return (
        <LayoutPlayItem>
            <Thumbnail
                thumbsize='thumbnail--big'/>        
            <PlayDescription/>            
        </LayoutPlayItem>        
    )
}

export default PlayItem;