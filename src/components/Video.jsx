import React from 'react'; 
import Player from '../utils/player/player';
import '../styles/components/Video-control.css';

const Video =({children})=>{


    const LoadVideo=(event)=>{
        
        const play = document.querySelector(".control-play");
        const pause = document.querySelector(".control-pause");
        const timer = document.querySelector(".control-timer");
        const progress = document.querySelector(".control-progress");
        const controlTimeBar = document.querySelector(".control-timebar");


        new Player(event.target,{play, pause, timer, progress, controlTimeBar}) 
    }
    return (
        <div className='video' >
            <video 
                onLoadedMetadata={LoadVideo}
                className='video-item'>
                <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></source>
            </video>
            { children }
        </div>
    )
}

export default Video;