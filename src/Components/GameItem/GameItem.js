import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import GameImage from '../../Components/GameImage/GameImage';
import GameBuy from '../GameBuy/GameBuy';
import GameGenre from '../GameGenre/GameGenre';
import { setCurrentGame } from '../../Redux/games/Reducer';
import './GameItem.css';

const GameItem = ({game}) => {
    const dispatch=useDispatch();
    const history=useHistory();
    const handleClick = () =>{
        dispatch(setCurrentGame(game));
        history.push(`/app/${game.title}`)
    }
    return (
        <div className="game-item" onClick={handleClick}>
            <GameImage image={game.image}/>
            <div className='game-item-details'>
                <span className='game-item-title'>{game.title}</span>
                <div className='game-item-genres'>
                    {game.genres.map((genre)=><GameGenre genre={genre}/>)}
                </div>
                <div className='game-item-description'>{game.description}</div>
              <div className='game-item-buy'>
              <GameBuy game={game}/>
              </div>
            </div>
        </div>
    );
};
export default GameItem;