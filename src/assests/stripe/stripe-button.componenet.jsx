import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})  => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51NlFhyE2incsZ4SeerrUCDGbTIHO8Easzlo0gF8SHGWxjmyUN3JhQDQMbmTksWtLHpBnIX31BDQAqg1EQ6k7LNrt004WkI2yYQ" ;
    
    const onToken = token => {
        console.log(token);
        alert("payment Successfull")
    }
    
   
    

    return (
        <StripeCheckout
           label="Pay Now"
           name="crwn-clothing"
           billingAddress
           shippingAddress
           image=""
           discription = {`your total is $${price}`}
           amount = {priceForStripe}
           token = {onToken}
           stripeKey = {publishableKey}
/>        
    )}
export default StripeCheckoutButton



