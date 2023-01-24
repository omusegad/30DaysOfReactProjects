import { createSlice } from "@reduxjs/toolkit";
import { Cart, Product } from '../../apptypes/types';
import { tostifyNotofication } from '../../utils/tostify';

const cartInitialState:Cart = {
    cart: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action) => {
            const  {id, title, category, price, description, image, rating } = action.payload;
            const item  = {id, title, category, price, description, image, rating, quantity: 1 } ;
            const existing_item = state.cart.findIndex((i:Product) => i.id === item.id);
                
            if (existing_item >= 0) {
                state.cart[existing_item].quantity += 1;
                return;
            }else{
                const tempItems = {...item, quantity: 1}
                state.cart.push(tempItems);
            } 
        },
        removeCartItem: (state, action) => {
            const existing_item = state.cart.findIndex((i:Product) => i.id === action.payload);
            if (existing_item >= 0) {
                state.cart.splice(existing_item, 1);
            }
        }
    }
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;