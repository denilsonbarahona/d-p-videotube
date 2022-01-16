import React from 'react';

const VideoControls=()=>{
    return (
        <div className="control">            
            <div className='control-timebar'>
                <div className="control-progress"></div>
            </div>
            <div className="control-actions">
                <button 
                    className="Button control-play"
                    type="button">
                    <i className="icon-play"></i>
                </button>
                <button 
                    className="Button control-pause"
                    type="Button">
                    <i className="icon-pause"></i>
                </button>
                <p className="control-timer">
                    00:00 / 00:00 
                </p>
            </div>
        </div>
    )   
}

export default VideoControls;
