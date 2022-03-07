import React from 'react';
import './GameGenre.css'

const GameGenre = ({genre}) => {
    return (
        <div className='game-genre'>
            {genre}
        </div>
    );
};

export default GameGenre;