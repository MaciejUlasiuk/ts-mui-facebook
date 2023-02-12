import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    posts: Object[]
}
const initialState: IUser = {
    posts: [],
}

export const postsSlice = createSlice({
    name: "postsSlice",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Object[]> ) =>{
            state.posts = action.payload
        },
        logoutUser: (state, action: PayloadAction<Object[]>) => {
            state.posts = action.payload
        }
    }
})
export const {setPosts, logoutUser} = postsSlice.actions
export default postsSlice.reducer