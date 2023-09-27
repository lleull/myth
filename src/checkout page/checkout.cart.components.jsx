import React from "react";
import "./checkout.scss";
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCardTotal } from "../redux/Cart/cart.selector";
import CheckoutItem from "../checkout-items/checkout-items.component";
import { withRouter } from "../components/menu-item/menu-item.component";


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
        CartItems.map(cartItem => (
        
        <CheckoutItem  key={cartItem.id}  cartItem={cartItem}/>
        
        ) )
      }
      <div className="total">

        <span>TOTAL: ${Total}</span>
        </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector ({
    CartItems: selectCartItems,
    Total: selectCardTotal
})


export default withRouter(connect(mapStateToProps)(Checkout));
