import React from 'react';
import '../styles/components/Video-control.css';

const Video =({children})=>{
    return (
        <div className='video' >
            <video className='video-item'>
                <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></source>
            </video>
            { children }
        </div>
    )
}

export default Video;