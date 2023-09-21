import React from "react";
import "./cart.styles.scss"
import {ReactComponent  as Shoppingcart} from "../../assests/cart.svg"
import {ToggleCardHidden} from "../../redux/Cart/cart.action";
import { connect } from "react-redux";
import { SelectCartItemCount } from "../../redux/Cart/cart.selector";

const CartIcon = ({ ToggleCardHidden, itemCount }) => (
    <div className="cart-icon" onClick={ToggleCardHidden}>
        <Shoppingcart className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>

)



const mapDispatchToProps = dispatch => ({
    ToggleCardHidden: () => dispatch(ToggleCardHidden())
})

const mapStateToProps = state => ({
    itemCount: SelectCartItemCount(state)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
(CartIcon)