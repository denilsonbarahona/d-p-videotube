import React from 'react';
import Thumbnail from '../components/Thumbnail';
import LayoutPlayItem from '../layouts/LayoutPlayItem';
import PlayDescription from '../components/PlayDescription';


const PlayItem =({item , type})=>{
    return (
        <LayoutPlayItem            
            type={type}>
            <Thumbnail
                thumbnails={item.snippet.thumbnails}
                thumbsuggest={`${type==='suggest'&&'thumbnail-suggest'}`}/>       
            <PlayDescription 
                title={item.snippet.title}
                channel={item.channel}
                viewCount={item.statistics.viewCount}
                publichAt={item.snippet.publishedAt}
                type={type}/>            
        </LayoutPlayItem>        
    )
}

export default PlayItem;