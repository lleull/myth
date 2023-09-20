import React from "react";
import CustomButton from "../components/button-component/button-componet";
import "./cart.dropdown.styles.scss"

import ToggleCardHidden from "../redux/Cart/cart.action";



const CartDropDown = () => (
    <div className="cart-dropdown" onClick={ToggleCardHidden}>
         <h1>Ordered</h1>
        <div className="cart-items" />
       
        <CustomButton>Go Checkout</CustomButton>
    </div>
)


export default  CartDropDown;