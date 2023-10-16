import React from "react";
import CustomButton from "../components/custom-button/custom-button.component";
import CartItem from "../components/cart-item-components/cart.item.components";
import "./cart.dropdown.styles.scss";
import { selectCartItems } from "../redux/Cart/cart.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "../components/menu-item/menu-item.component";

import { Link } from "react-router-dom";




const CartDropDown = ({ cartItems, history }) => (


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
   
);


const mapToDispatchProps = createStructuredSelector({
  cartItems: selectCartItems,
});



export default withRouter(connect(mapToDispatchProps)(CartDropDown));
