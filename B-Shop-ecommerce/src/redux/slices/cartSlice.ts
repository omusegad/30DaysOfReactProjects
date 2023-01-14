import { createSlice } from "@reduxjs/toolkit";
import { Cart, Product } from '../../apptypes/types';

const cartInitialState:Cart = {
    cart: [],
    cartTotal: 0,
    cartTotalQuantity: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex((item:Product) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartTotalQuantity += 1;
                return;
            }else{
                const tempItems = {...action.payload}
                state.cart.push(tempItems);
                state.cartTotalQuantity = 1; 
                state.cartTotal += action.payload.price * state.cartTotalQuantity;
            }

            // state.cart.push(action.payload);
            // state.cartTotalQuantity = 1
            // state.cartTotal += action.payload.price * state.cartTotalQuantity;
        },

    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;