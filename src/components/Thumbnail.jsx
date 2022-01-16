import React from 'react';
import '../styles/components/thumbnail.css';

const Thumbnail =({thumbnails, thumbsuggest})=>{
    return (
        <div className={`thumbnail ${thumbsuggest}`}>
            <figure className='thumbnail-figure'>
                <img
                    className='thumbnail-img' 
                    src={thumbnails.medium?.url}
                    alt='alt dummy'
                />
            </figure>
            <div className="thumbnail-timer">
                <p className='thumbnail-time-content'>13:55</p>
            </div>
        </div>
    )
}

export default Thumbnail;
