import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

function CartScreen(props){
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;

    // The ternary operator checks if props.location.search empty.
    // Returns the value after equal sign or 1(the default value). 
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }

    const checkoutHandler = () =>{
        // for redirecting to signin page.
        props.history.push("/signin?redirect=shipping");
    }
    // Access function components(methods) of cartActions.js
    // which access store's states and method(dispatch method in this case).
    useEffect(() => {
        if(productId){
            // access addToCart component which run dispatch method
            // at cartActions.js
            dispatch(addToCart(productId, qty)); 
        }
    }, [])

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>Shopping Cart</h3>
                    <div>Price</div>
                </li>
                {
                    cartItems.length === 0?
                    <div>
                        Cart is empty
                    </div>
                    :
                    cartItems.map(item=>
                    <li>    
                        <div className="cart-image">
                                <img src={item.image} alt="product" />
                            </div>
                            
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/" + item.product}>
                                        { item.name }
                                    </Link>
                                </div>
                                <div>
                                Quantity:
                                    {/*onChange function is for select element.*/ }
                                    {/* Below passes event(e) to dispatch function and used "value" of the target(element that triggers the event) */}
                                    <select value={ item.qty } onChange={ (e) => dispatch(addToCart(item.product, e.target.value))}>
                                        {[...Array(item.numOfStock).keys()].map(x =>
                                            <option key={x + 1} value= {x + 1}>{x + 1}</option>
                                        )}
                                    </select>
                                    {/* Using an arrow function in render creates a new function each time the component renders.*/}
                                    {/* Often the easiest way to pass parameters to callback functions. */ }
                                    {/* https://reactjs.org/docs/faq-functions.html */}
                                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="cart-price">
                                ${ item.price }
                            </div>    
                    </li>                 
                    )
                }
            </ul>      
        </div>

        <div className="cart-action">
            <h3>
                Subtotal ( { cartItems.reduce((a, c) => a + c.qty, 0) } items)
                :
                ${ cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <button onClick={ checkoutHandler } className="button primary full-width" disbled={cartItems.length === 0}>
                Proceed To Checkout
            </button>
        </div>
    </div>
}

export default CartScreen;