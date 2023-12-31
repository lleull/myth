import { CardActionTypes } from "./cart.types"
import { addItemToCart, removeitemfromcart } from "./cart.utils"
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case CardActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
          
        case CardActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CardActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:  state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        
        case CardActionTypes.CLEAR_CART:
            return{
                
                cartItems: []
            }

        case CardActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeitemfromcart(state.cartItems, action.payload)
               
            }
            default:
                return state
    }
}
export default cartReducer;