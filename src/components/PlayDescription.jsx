import React from 'react';
import '../styles/components/PlayDescription.css';

const PlayDescription =()=>{
    return (
        <div className='playDescription'>
            <figure className="playDescription-figure">
                <img 
                    className='playDescription-img'
                    src="https://media-exp1.licdn.com/dms/image/C560BAQGO84ajs8emiA/company-logo_200_200/0/1613584494148?e=2159024400&v=beta&t=97DzUrq8Mzei6ErR3tTCmuPFkZZJ4hhVNzzjW4Ry22s" 
                    alt="alt dummy" />
            </figure>
            <div className="playDescription-content">
                <h2 className='playDescription-title'>
                    ¿Cómo Consumir una API | Pokémon API?
                </h2>
                <p className='playDescription-chanel'>
                    Leonidas Esteban
                </p>
                <p className='playDescription-info'>
                    54 vistas - hace 16 minutos
                </p>
            </div>
        </div>
    )
}

export default PlayDescription;