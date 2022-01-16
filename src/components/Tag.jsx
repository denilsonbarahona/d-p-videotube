import React,{useContext} from 'react';
import AppContext from '../context/AppContext';

const Tag =({tagName, tagId})=>{
    const {state, selectedCategory} = useContext(AppContext);

    const handleTagClick=(tagId)=>{
        selectedCategory(tagId)
    }

    return (
        <div 
            onClick={()=>{handleTagClick(tagId)}}
            className={`Tag ${(tagId === state.category)?'Tag--active':'Tag--inactive'}`}>
            <p className='Tag-description'>{tagName}</p>
        </div>
    )
}

export default Tag;