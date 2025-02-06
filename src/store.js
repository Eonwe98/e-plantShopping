import { configureStore } from '@reduxjs/toolkit';
import applyMiddleware from 'redux'
import thunkMiddleware from 'redux-thunk'
import cartReducer from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    //middleware: applyMiddleware(thunkMiddleware)
});

export default store
