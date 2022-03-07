import React from 'react';
import Button from '../Button/Button';
import { calctotalPrice } from '../utils';
import CartItem from '../CartItem/CartItem';
import './CartMenu.css'

const Cartmenu = ({items, onClick}) => {
    return (
        <div className='cart-menu'>
             <div className='cart-menu-list'>
                {  items.length> 0 ? items.map((game) => (<CartItem key={game.title} price={game.price} title={game.title} id={game.id}/>)) : 'Корзина пуста'}    
             </div>
             {
             items.length > 0 ?
             <div className='cart-menu-arrange'>
                 <div className='cart-menu-total-price'>
                    <span>Итого: </span>
                    <span>{calctotalPrice(items)} Сум</span>
                 </div>
                 <Button type="primary" size="m" onClick={onClick}>
                     Оформить заказ
                 </Button>
             </div>
             :null
             }
        </div>
    );
};

export default Cartmenu;