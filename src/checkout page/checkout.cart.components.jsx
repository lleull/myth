import React from "react";
import "./checkout.scss";
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCardTotal } from "../redux/Cart/cart.selector";


const Checkout = ({CartItems, Total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>product </span>
        </div>
        <div className="header-block">
          <span> discription</span>
        </div>
        <div className="header-block">
          <span>  quantity</span>
        </div>
        <div className="header-block">
          <span> price</span>
         
        </div>
        <div className="header-block">
          <span> Remove</span>
        </div>
      </div>

      {
        CartItems.map(CartItem => 
            CartItem.name)
      }
      <div className="total">

        <span>TOTAL: ${Total}</span>
        </div>
    </div>
  );
};

const mapToDispatchProps = createStructuredSelector ({
    CartItems: selectCartItems,
    Total: selectCardTotal
})
export default connect(mapToDispatchProps)(Checkout);
