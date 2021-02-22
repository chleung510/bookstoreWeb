import axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/cartConstants";

const addToCart = (productId, qty) => async(dispatch, getState) => {
    try{
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload:{
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                numOfStock: data.numOfStock,
                qty
            }
        });
        // after dispatching(adding item(s)) to cart
        const  { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems)); // for saving the cart items.
    } 
    catch (error){

    }
}
const removeFromCart = (productId) => (dispatch, getState) => {
     dispatch({ type: CART_REMOVE_ITEM, payload: productId }) ;
    // after dispatching(adding item(s)) to cart
    const  { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems)); // for saving the cart items.
}
const saveShipping = (data) => (dispatch) =>{
    dispatch({ type: CART_SAVE_SHIPPING, payload: data })
}

const savePayment = (data) => (dispatch) =>{
    dispatch({ type: CART_SAVE_PAYMENT, payload: data })
}

export { addToCart, removeFromCart, saveShipping, savePayment }