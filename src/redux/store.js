import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./feautres/searchSlice"
import collectionReducer from "./feautres/collectionSlice"

export const store=configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})