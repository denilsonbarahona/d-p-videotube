const config_ = {
    day: "numeric", 
    month: 'long',
    year: 'numeric'
}

const formatLength =(param)=>{
    if( String(param).length < 2 )
        return `0${param}`
    return param;
}


export function formatDate(date, config=config_) {
    return new Intl.DateTimeFormat('en', config).format(date)
}

export function formatDurationTime(duration) {
    if(!isNaN(duration)) {
        const minutes = Math.floor(duration/60);
        const seconds = Math.floor( duration - minutes * 60);
    
        return `${formatLength(minutes)}: ${formatLength(seconds)}`;
    }
    
    return '00:00';
}


