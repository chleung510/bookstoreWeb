import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/cartConstants";

function cartReducers(state = { cartItems:[], shipping: {}, payment: {} }, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload; //item that user wants to add to cartItem.
            // Checks if item that you want to add is in cart and returns the product.
            const product = state.cartItems.find(x=> x.product === item.product);

            console.log(product)
            if(product){ //if item exists
                // replace the product in cart with item that user want to add otherwise add right after the product.
                return {cartItems: state.cartItems.map(x=>x.product === product.product? item : x)};
            }
            return { cartItems: [...state.cartItems, item]};
        case CART_REMOVE_ITEM:
            // Filter function below creates new array with items(action.payload) removed. 
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
        case CART_SAVE_SHIPPING:
            // Preserve the original state and add shipping data.
            return { ...state, shipping: action.payload }
        case CART_SAVE_PAYMENT:
            // Preserve the original state and add payment data.
            return { ...state, payment: action.payload }
        default:
            return state;
    }
    
}

export { cartReducers }