import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderScreen(props){
    const cart = useSelector(state => state.cart);
    const { cartItems, shipping, payment } = cart;

    // If shipping address exists
    if (!shipping.address){
        props.history.push("/shipping");
    }

    // If payment method exists
    if (!payment.paymentMethod){
        props.location.push("/payment");
    }

    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0) // Default value of items is 0.
    const shippingPrice = itemsPrice > 100 ? 0 : 10; // If total is over 100 shipping will be $0 otherwise $10.
    const taxPrice = 0.7 * itemsPrice; // To calculate tax based on the total.
    const orderPrice = itemsPrice + shippingPrice + taxPrice;
  
    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        //
    }


    // Access function components(methods) of cartActions.js
    // which access store's states and method(dispatch method in this case).
    useEffect(() => {
     
    }, [])

    const checkoutHandler = () =>{
        // for redirecting to signin page.
        props.history.push("/signin?redirect=shipping");
    }
    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="placeOrder">
            <div className="placeOrder-info">
                <div>
                    <h3>Shipping</h3>
                    <div>
                        {cart.shipping.address}, {cart.shipping.city},
                        {cart.shipping.postalCode}, {cart.shipping.country},
                    </div>
                </div>

                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {cart.payment.paymentMethod}
                    </div>
                </div>

                <div>
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
                                            Quantity: {item.qty}
                                        
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
            </div>
                

            <div className="placeOrder-action">
                <ul>
                    <li>
                        <button className="button primary full-width" onClick={placeOrderHandler}>Place Order</button>
                    </li>
                    <li>
                        <h3>Order Summary</h3>
                    </li>
                    <li>
                        <div>Items</div>
                        <div>${itemsPrice}</div>
                    </li>
                    <li>
                        <div>Shipping</div>
                        <div>${shippingPrice}</div>
                    </li>
                    <li>
                        <div>Tax</div>
                        <div>${taxPrice}</div>
                    </li>
                    <li>
                        <div>Order Total:</div>
                        <div>${orderPrice}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default PlaceOrderScreen;