import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
    reducer:{                                    // this  reducer coming from export 
        cart: cartReducer,
        product: productReducer,
    }
})

export default store ;