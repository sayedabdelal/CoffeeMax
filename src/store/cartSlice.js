import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], // List of all products
    cart: [],     // List of items in the cart
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload; // Initialize products list
        },
        addToCart(state, action) {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if the item exists
            } else {
                state.cart.push({ ...action.payload, quantity: 1 }); // Add new item to the cart
            }
        },
        removeFromCart(state, action) {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                if (state.cart[itemIndex].quantity > 1) {
                    state.cart[itemIndex].quantity -= 1; // Decrease quantity
                } else {
                    state.cart.splice(itemIndex, 1); // Remove item if quantity is 1
                }
            }
        },
        clearCart(state) {
            state.cart = []; // Clear all items in the cart
        },
    },
});

export const { addToCart, removeFromCart, clearCart, setProducts } = cartSlice.actions;

export default cartSlice.reducer;
