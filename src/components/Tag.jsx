import React from 'react';

const Tag =({tagName, TagStyleState})=>{
    return (
        <div className={`Tag ${TagStyleState}`}>
            <p className='Tag-description'>{tagName}</p>
        </div>
    )
}

export default Tag;