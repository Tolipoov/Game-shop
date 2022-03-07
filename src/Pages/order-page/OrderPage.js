import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../Components/OrderItem/OrderItem';
import { calctotalPrice } from '../../Components/utils';
import './OrderPage.css'

const OrderPage = () => {
    const items=useSelector(state=>state.cart.itemsInCart)

    if(items.length<1){
        return<h1>Ваша корзина пуста</h1>
    }
    return ( 
        <div className='order-page'> 
            <div className='order-page-left'>
                {items.map(game=> <OrderItem game={game}/>)}
            </div>
            <div className='order-page-right'>
                <div className='order-page-total-price'>
                    <span>
                      {items.length} товаров на суму {calctotalPrice(items)} сум
                    </span>
                </div>
            </div>
        </div> 
    );
};

export default OrderPage;