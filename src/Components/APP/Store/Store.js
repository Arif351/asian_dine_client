import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../Post/PostSlice";

const store = configureStore({
    reducer: {
        foodPosts: PostReducer
    }
});
export default store;