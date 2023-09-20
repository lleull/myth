import React from "react";
import CustomButton from "../components/button-component/button-componet";
import CartItem from "../components/cart-item-components/cart.item.components";
import "./cart.dropdown.styles.scss"
import { connect } from "react-redux";




const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown" >
    
        <div className="cart-items" >
            {
            
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
              ))
            
            }
            
            </div>
    
        <CustomButton>Go Checkout</CustomButton>
    </div>
)

const mapToDispatchProps = ({cart: { cartItems } }) => ({
cartItems

})


export default  connect(mapToDispatchProps)(CartDropDown);