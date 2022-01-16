import React from 'react';
import Header from '../containers/Header';
import VideoCurrentPlaying from '../containers/VideoCurrentPlaying';  
import MainLayout from '../layouts/LayoutMain';

const Playing =()=>{
    return (
        <MainLayout>
            <Header/>
            <VideoCurrentPlaying/>
        </MainLayout>
    )
}

export default Playing;
