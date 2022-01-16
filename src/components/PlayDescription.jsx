import React from 'react';
import '../styles/components/PlayDescription.css';
import {formatDate} from '../utils/formatData';

const PlayDescription =({ title, channel, viewCount, publichAt, type })=>{
    
    return (
        <div className={type !== "suggest"?'playDescription':'suggestDescription'}>
            <figure className="playDescription-figure">
                <img 
                    className='playDescription-img'
                    src={channel.thumbnails.default.url} 
                    alt="alt dummy" />
            </figure>
            <div className="playDescription-content">
                <h2 className='playDescription-title'> {title} </h2>
                <p className='playDescription-chanel'> {channel.title} </p>
                <p className='playDescription-info'>
                    {Number(viewCount).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1,")} views - {formatDate(new Date(publichAt)) }
                </p>
            </div>
        </div>
    )
}

export default PlayDescription;