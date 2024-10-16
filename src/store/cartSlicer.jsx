import { createSlice } from '@reduxjs/toolkit';

const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlicer = createSlice({
    name: "cart",
    initialState: {
        data: [],
        totalAmount: 0,
        totalItems: 0,
        deliveryCharge: 10,
    },

    reducers: {
        addToCart(state, action) {
            const existingProduct = state.data.find(product => product.id === action.payload.id);

            if (existingProduct) {
                // Update quantity and total price for existing product
                const tempCart = state.data.map(product => {
                    if (product.id === action.payload.id) {
                        const newQty = product.quantity + action.payload.quantity;
                        const newTotalPrice = newQty * product.price;

                        return {
                            ...product,
                            quantity: newQty,
                            totalPrice: newTotalPrice,
                        };
                    }
                    return product;
                });

                state.data = tempCart;
            } else {
                // Add new product to cart
                state.data.push(action.payload);
            }

            // Update local storage
            storeInLocalStorage(state.data);
            // Optionally update total amount and total items
            state.totalItems = state.data.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.data.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeFromCart(state, action) {
            // Remove product from cart
            state.data = state.data.filter(product => product.id !== action.payload.id);
            storeInLocalStorage(state.data);
            // Update total amount and total items
            state.totalItems = state.data.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.data.reduce((total, item) => total + item.totalPrice, 0);
        },
        resetCart(state) {
            state.data = [];
            state.totalAmount = 0;
            state.totalItems = 0;
            storeInLocalStorage(state.data); // Clear local storage
        },

        updateQuantity :(state, action) => {
            const{id, quantity} = action.payload;
            const productIndex = state.data.findIndex(item => item.id === id);

            if(productIndex !== -1){
                const UpadateProduct = {
                    ...state.data[productIndex],
                    quantity:Math.max(quantity || 1 , 1),

                };
                UpadateProduct.totalPrice = UpadateProduct.price * UpadateProduct.quantity;
                state.data[productIndex] = UpadateProduct;
                storeInLocalStorage(state.data)
            }
        },
    
        getCartTotal(state) {
            state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
                return cartTotal + cartItem.totalPrice;
            }, 0);
    
            state.totalItems = state.data.reduce((totalItems, cartItem) => {
                return totalItems + cartItem.quantity;
            }, 0);
        },

    },
});

export const { addToCart, removeFromCart, updateQuantity, getCartTotal, resetCart } = cartSlicer.actions;
export default cartSlicer.reducer;
