import React from 'react';
import { useSelector } from 'react-redux';
import GameBuy from '../../Components/GameBuy/GameBuy';
import GameImage from '../../Components/GameImage/GameImage';
import GameGenre from '../../Components/GameGenre/GameGenre';
import './GamePage.css';

const GamePage = () => {
    const game=useSelector((state)=>state.game.currentGame);

    if(!game) return null;

    return (
        <div className='game-page'>
            <h1 className='game-page-title'>{game.title}</h1>
            <div className='game-page-content'>
                <div className='game-page-left'>
                    <iframe width="90%" height='400px' src={game.video} title="Youtube Video Player" frameBorder='0'>
                    </iframe>
                </div>
                <div className='game-page-right'>
                 <GameImage image={game.image}/> 
                 <p>{game.description}</p>
                 <p className='secondary-text'>Популярные метки этого продукта:</p>
                 <div className='game-category'>
                 {game.genres.map((genre) => (<GameGenre genre={genre} key={genre}/>))}</div>   
                <div className='game-page-buy'>
                    <GameBuy game={game}/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;