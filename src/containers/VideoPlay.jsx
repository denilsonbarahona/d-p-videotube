import React, {useEffect} from 'react';
import Video from '../components/Video';
import VideoControls from '../components/VideoControls';



const VideoPlay =()=>{
    useEffect(()=>{
        import('../utils/playerInit');
    },[])

    return (
        <>
            <Video>
                <VideoControls/>
            </Video>
        </>
    )
}

export default VideoPlay;