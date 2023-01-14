import { configureStore } from "@reduxjs/toolkit"
import countSlice from "./slices/countSlice"
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice"

export default configureStore({
    reducer: {
        counter: countSlice,
        product: productReducer,
        cart: cartReducer
    }
})