import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const postFetch = createAsyncThunk("posts/postFetch",
    async (id) => {
        try {
            const res = await axios.get("http://localhost:5000/foodList/")
            console.log(res.data);
            return res.data;
        }
        catch {

        }
    });

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(postFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        });
        builder.addCase(postFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        });
    }
})

export default postSlice.reducer;