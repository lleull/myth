import React from "react";
import "./cart.styles.scss"
import {ReactComponent  as Shoppingcart} from "../../assests/cart.svg"
import ToggleCardHidden from "../../redux/Cart/cart.action";
import { connect } from "react-redux";

const CartIcon = ({ ToggleCardHidden }) => (
    <div className="cart-icon" onClick={ToggleCardHidden}>
        <Shoppingcart className="shopping-icon" />
        <span className="item-count">1</span>
    </div>

)



const mapDispatchToProps = dispatch => ({
    ToggleCardHidden: () => dispatch(ToggleCardHidden())
})

export default connect(null, mapDispatchToProps) (CartIcon)