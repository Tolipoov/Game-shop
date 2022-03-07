import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { calctotalPrice } from "../utils";
import {useHistory} from 'react-router-dom'
import Cartmenu from "../CartMenu/Cartmenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import "./CartBlock.css";

const Cartblock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calctotalPrice(items);
  const history=useHistory();

  const hundleClick = useCallback(()=>{
    setIsCartMenuVisible(false);
    history.push('/order'); 
  }, [history]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <BsCart
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (<span className="cart-price">{totalPrice} Сум</span>) : null}
      {isCartMenuVisible && <Cartmenu items={items} onClick={hundleClick} />}
    </div>
  );
};

export default Cartblock;
