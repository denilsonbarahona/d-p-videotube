import React from 'react';
import '../styles/layouts/LayoutMain.css';

const MainLayout = ({children})=>{
    return (
        <main className='main'>
            {children}
        </main>
    )
}


export default MainLayout;