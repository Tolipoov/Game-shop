import React from 'react';
import { useDispatch } from 'react-redux';
import GameImage from '../GameImage/GameImage';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './OrderItem.css'
import { deleteitemInCart } from '../../Redux/cart/Reducer';

const OrderItem = ({game}) => {
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(deleteitemInCart(game.id));
    }

    return (
        <div className='order-item'>
            <div className='order-item-cover'>
                <GameImage image={game.image}/>
            </div>
            <div className='order-item-title'>
                <span>{game.title}</span>
            </div>
            <div className='order-item-price'>
                <span>{game.price} сум</span>
                <AiOutlineCloseCircle
                 size={25}
                className='cart-item-delete-icon'
                onClick={handleClick}
               />
            </div>
        </div>
    );
};

export default OrderItem;