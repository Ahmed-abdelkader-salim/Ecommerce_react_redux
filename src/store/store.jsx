import { configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import cartReducer from './cartSlicer';

const rootReducer = {
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;