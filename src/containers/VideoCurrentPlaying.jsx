import React from 'react';
import VideoPlay from './VideoPlay';
import LayoutCurrentPlaying from '../layouts/LayoutCurrentPlaying';
import Suggestions from './Suggestions';

const VideoCurrentPlaying =()=>{
    return (
        <LayoutCurrentPlaying>
           <VideoPlay/>
           <Suggestions/>
        </LayoutCurrentPlaying>
    )
}

export default VideoCurrentPlaying;
