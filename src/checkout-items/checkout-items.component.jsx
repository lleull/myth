import React from "react";
import "./checkout-items.scss"
import { Clearitemfromcart } from "../redux/Cart/cart.action";
import { connect } from "react-redux";
import { RemoveItem, addItem } from "../redux/Cart/cart.action";

const CheckoutItem =  ({ cartItem, clearItem, addItem, removeItem }) => {


    const {name, imageUrl, quantity, price} = cartItem
    return(
<div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt="img" className="img"/>
      
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
        <div className="arrow" onClick={() => (removeItem(cartItem))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow"  onClick={() => (addItem(cartItem))}>&#10095; </div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() =>  clearItem(cartItem)}>
&#10005;
    </div>

</div>
)
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(Clearitemfromcart(item)),
    removeItem: item => dispatch(RemoveItem(item)),
    addItem: item => dispatch(addItem(item))

})


export default connect(null,mapDispatchToProps)(CheckoutItem);