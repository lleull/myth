import React, { useEffect } from "react";
import "./checkout.scss";
import { selectCartItems, selectCardTotal } from "../../redux/Cart/cart.selector";
import CheckoutItem from "../../checkout-items/checkout-items.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import StripeCheckoutButton from "../../assests/stripe/stripe-button.componenet";


 const Checkout = () => {
const CartItems = useSelector(selectCartItems)
const Total = useSelector(selectCardTotal)

useEffect(() => {
  CartItems()
  Total()
},[CartItems, Total ])

  return(

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
        <StripeCheckoutButton price={Total} />
    </div>
)
    }


// const mapStateToProps = createStructuredSelector ({
//     CartItems: selectCartItems,
//     Total: selectCardTotal
  
// })


export default Checkout;
