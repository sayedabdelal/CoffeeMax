import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import "./CartPage.css";
import { Link } from "react-router-dom";

function CartPage() {
    const cart = useSelector((state) => state.cart.cart);  
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <section className="cart-page">
            <h1 className="cart-title">Your Shopping Cart</h1>
            {cart.length > 0 ? (
                <div className="cart-container">
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image_url} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-price">Price: ${item.price}</p>
                                <div className="cart-item-quantity">
                                    <button onClick={() => handleRemove(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleAdd(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total Price: ${calculateTotalPrice()}</h2>
                        <Link to='checkout' className="checkout-button">Checkout</Link>
                    </div>
                </div>
            ) : (
                <p className="empty-cart">Your cart is empty.</p>
            )}
        </section>
    );
}

export default CartPage;
