import { CardActionTypes } from "./cart.types";

export const ToggleCardHidden = () => ({
    type: CardActionTypes.TOOGLE_CART_HIDDEN
});


export const RemoveItem = item => ({
    type: CardActionTypes.REMOVE_ITEM,
    payload: item
})

export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})

 export  const Clearitemfromcart = item => ({
    type: CardActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
 })

export default ToggleCardHidden(addItem)
