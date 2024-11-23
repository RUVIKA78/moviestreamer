import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"
import movieReducer from "./movieslice"
const store = configureStore({
    reducer: {
        app: userReducer,
        movie:movieReducer
    }

})

export default store;