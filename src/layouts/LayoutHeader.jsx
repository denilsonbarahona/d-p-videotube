import React from 'react';
import '../styles/layouts/LayoutHeader.css'

const LayoutHeader =({children})=>{
    return (
        <header className='header'>
            {children}
        </header>
    )
}

export default LayoutHeader;
