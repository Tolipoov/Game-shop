import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteitemInCart, setItemInCart } from '../../Redux/cart/Reducer';
import Button from '../Button/Button';
import './GameBuy.css';

const GameBuy = ({game}) => {
    const dispatch = useDispatch()
    const items =useSelector(state => state.cart.itemsInCart)
    const isItemInCart =items.some(item => item.id ===game.id)

    const hundleClick = (e) =>{
        e.stopPropagation();
        if(isItemInCart){
        dispatch(deleteitemInCart(game.id));
        }else{
            dispatch(setItemInCart(game));    
        }
    }

    return (
        <div className='game-buy'>
            <span className='game-buy-price'>{game.price} Сум</span>
            <Button type={isItemInCart ? "secondary" : "primary"} onClick={hundleClick}> {isItemInCart ? 'Убрать из корзины' : 'В корзину'}</Button>
        </div>
    );
};

export default GameBuy;