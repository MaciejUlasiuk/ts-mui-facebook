import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../helpers/apiInstance";
import { IPost, IPosts } from "../types/types";
interface IPostsData {
    posts: IPosts,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: Error | null | unknown
}
const initialState: IPostsData = {
    posts: {
         data: [],
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
        addPosts: (state, action: PayloadAction<IPost>) => {
            state.posts.data = [...state.posts.data, action.payload]
        },
        removePosts: (state, action: PayloadAction<Number>) => {
            const index = action.payload;
            state.posts.data = state.posts.data.filter((post, i) => i !== index);
        },
        addLike: (state, action: PayloadAction<Number>) => {
            const index = action.payload;
            state.posts.data = state.posts.data.map((post, i) => {
                if(index===i) post.likes +=1;
                return post
            })
        }
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