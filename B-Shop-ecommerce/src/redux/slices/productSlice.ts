import { createSlice } from "@reduxjs/toolkit";
import { Product } from '../../apptypes/types';


const initialProductSate = {
    products: [] as Product[],
};

export const productSlice = createSlice({
    name: "allProducts",
    initialState: initialProductSate,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }

});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;