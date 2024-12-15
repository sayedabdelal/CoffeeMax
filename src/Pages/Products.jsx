import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, setProducts } from "../store/cartSlice";

function Products() {
    const [loading, setLoading] = useState(true);
    const products = useSelector((state) => state.cart.products); // Access products from Redux
    const cart = useSelector((state) => state.cart.cart); // Access cart from Redux
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch products and dispatch to Redux
        fetch("https://fake-coffee-api.vercel.app/api")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                dispatch(setProducts(data));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch addToCart action
    };

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product)); // Dispatch removeFromCart action
    };

    const isProductInCart = (productId) => {
        return cart.some((item) => item.id === productId); // Check if product is in cart
    };

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <section className="products" id="products">
            <div className="heading">
                <h2>Our Popular Products</h2>
            </div>
            <div className="products-container">
                {products.map((product) => (
                    <div className="box" key={product.id}>
                        <img src={product.image_url} alt={product.name} />
                        <h3>{product.name}</h3>
                        <div className="content">
                            <span>${product.price}</span>
                            {isProductInCart(product.id) ? (
                                <a onClick={() => handleRemoveFromCart(product)}>
                                    Remove from Cart
                                </a>
                            ) : (
                                <a onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
