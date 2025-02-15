import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

// Store Configuration:
// configureStore is invoked with an object containing the store configuration options.
// The reducer property is specified as an object where each key represents a slice of 
// state, and each value represents the corresponding reducer function.
// In this case, the cartReducer is associated with the cart slice of state. 
// This means that the state managed by the cartReducer will be stored under the
// cart key in the Redux store.
const store = configureStore({
  reducer: {
    // As defined in the CartSlice file, the cartReducer is associated with the cart slice of state.
    cart: cartReducer,
  },
});

export default store;