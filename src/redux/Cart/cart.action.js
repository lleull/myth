import { CardActionTypes } from "./cart.types";

 const ToggleCardHidden = () => ({
    type: CardActionTypes.TOOGLE_CART_HIDDEN
})


export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})
 

export default ToggleCardHidden (addItem);
