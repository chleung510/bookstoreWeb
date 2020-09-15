// Redux acts as a store to managing states, React sends out actions to get list of products
// It has 3 parts: Dispatcher(accepting action from React),
///////////////////Reducer(prepare the product to serve as state),
///////////////////State(a state ready to be sent back to React).
// Reducer is a function gets the state and action and returns a new state.

import{ createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const initialState = {}; //empty object.

//The combineReducers helper function turns an object
// whose values are different reducing functions into 
// a single reducing function you can pass to createStore.
const reducer  = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
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