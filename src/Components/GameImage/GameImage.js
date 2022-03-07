import React from 'react';
import './GameImage.css'

const GameImage = ({image= ""}) => {
    return (
        <div className='game-image' style={{backgroundImage: `url(${image})`}}/>
    );
};

export default GameImage;