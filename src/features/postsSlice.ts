import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../helpers/apiInstance";
import { IPost, IPosts } from "../types/types";
interface IUser {
    posts: IPosts,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: Error | null | unknown
}
const initialState: IUser = {
    posts: {
         data: [],
         total: 0,
         page: 0,
         limit: 10
    },
    status: 'idle',
    error: null,
}
const API = 'post?limit=10';
export const fetchPosts = createAsyncThunk('/postsSlice/fetchPosts', async () =>{
    try {
        const response = await axiosInstance.get(API)
        return response.data
    } catch (err) {
        return err instanceof Error ? err.message : null
    }
})
export const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPosts> ) =>{
            state.posts = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action)=>{
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.posts = action.payload
                console.log(action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.payload
            })
    },
    
})
export const {setPosts,} = postsSlice.actions
export default postsSlice.reducer