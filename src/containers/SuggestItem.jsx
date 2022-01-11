import React from 'react';
import Thumbnail from '../components/Thumbnail';
import LayoutSuggestItem from '../layouts/LayoutSuggestItem';
import SuggestDescription from '../components/SuggestDescription';

const SuggestItem =()=>{
    return (
        <LayoutSuggestItem>
            <Thumbnail
                thumbsize='thumbnail--small'/> 
            <SuggestDescription/>
        </LayoutSuggestItem>
    )
}

export default SuggestItem;