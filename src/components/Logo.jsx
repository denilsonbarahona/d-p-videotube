import React from 'react';
import VideoTube from '@images/Logo.png';
import '../styles/components/Logo.css';

const Logo =()=>{
    return (
        <figure className='Logo'>
            <img
                className='Logo-image'
                alt={`VideoTube's Logo`}
                src={VideoTube}
            />
        </figure>
    )
}


export default Logo;