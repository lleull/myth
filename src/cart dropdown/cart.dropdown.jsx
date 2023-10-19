import React from "react";
import CustomButton from "../components/custom-button/custom-button.component";
import CartItem from "../components/cart-item-components/cart.item.components";
import "./cart.dropdown.styles.scss";
import { selectCartItems } from "../redux/Cart/cart.selector";
import {useSelector } from "react-redux/es/hooks/useSelector";

import { Link } from "react-router-dom";






const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems) 
  return (

  


  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-message"> CART is Empty</span>
      )}
    </div>
      
    <div className="check">
    <Link to="/checkout">
   <CustomButton >GO CHECKOUT</CustomButton>
   </Link>
    </div>
  </div>
  )
   
};





export default CartDropDown;
