import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/LayoutPlayItem.css'; 

const LayoutPlayItem =({type ,children})=>{ 
    return (
        <Link to="/play" style={{textDecoration:"none"}}>
            <div 
                className={'LayoutPlayItem '+`${type ==='suggest'&&'LayoutSuggestItem'}`}>
                {children}
            </div>
        
        </Link>
    )
}


export default LayoutPlayItem;