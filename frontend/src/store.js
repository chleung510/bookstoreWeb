// Redux acts as a store to managing states, React sends out actions to get list of products
// It has 3 parts: Dispatcher(accepting action from React),
///////////////////Reducer(prepare the product to serve as state),
///////////////////State(a state ready to be sent back to React).
// Reducer is a function gets the state and action and returns a new state.

import{ createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk';
import Cookie from "js-cookie";
import { productListReducers, productDetailsReducers } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
import { userRegisterReducers, userSigninReducers } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || []; // Gets cart items from cookie or leave it empty if there is not any item.
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = { cart: {cartItems}, userSignin: { userInfo } }; 

//The combineReducers helper function turns an object
// whose values are different reducing functions into 
// a single reducing function you can pass to createStore.
const reducer  = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducers,
    userSignin: userSigninReducers,
    userRegister: userRegisterReducers
})

//for viewing action and states that Redux dispatched from browser
// Use compose from redux if it does not exist.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
//Middleware is some code you can put between the framework receiving a request, 
// and the framework generating a response. For example, Express or Koa middleware 
// may add CORS headers, logging, compression, and more. 

// thunk is a Middleware allows us to run async function in redux
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;