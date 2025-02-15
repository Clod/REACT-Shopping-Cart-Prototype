import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

// Initialize CartSlice with createSlice Redux Toolkit function. 
// createSlice is a utility function provided by Redux Toolkit, a 
// library built on top of Redux. It simplifies the process of creating 
// Redux slices, which are portions of the Redux state, along with 
// associated action creators and reducers.
const CartSlice = createSlice({
    // String value representing the name of your slice. It's used 
    // internally by Redux Toolkit for action type prefixing and other 
    // purposes.
    name: 'cart',
    // Object representing the initial state of the slice.
    initialState,
    // object containing reducer functions. Each key-value pair 
    // represents a single reducer, where the key is the name of 
    // the action and the value is the reducer function.
    reducers: {
        // This reducer function handles the action of adding an item to the cart.
        // It takes two parameters: state (current state of the slice) and action 
        // (the dispatched action containing the payload).
        addItemToCart(state, action) {
            // Checks if the item already exists in the cart by searching for its ID within state.cartItems.
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            // If the item exists increase the quantity of the item in the cart by 1.
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                // The item doesn't exist in the cart.
                // Adds the item to the cartItems array with a quantity of 1.
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        // This reducer function handles the action of removing an item from the cart.
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        // This reducer function handles the action of clearing the entire cart.
        clearCart(state) {
            state.cartItems = [];
        },
        // This reducer function handles the action of increasing the quantity of an item in the cart. 
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        // This reducer function handles the action of decreasing the quantity of an item in the cart.
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
                // If the quantity reaches 0 remove the item from the disabledProducts array
                if (itemToDecrease.quantity === 0) {
                    state.disabledProducts = state.disabledProducts.filter(id => id !== action.payload);
                }
            }
        },
    }

});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;


