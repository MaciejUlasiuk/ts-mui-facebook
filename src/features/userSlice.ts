import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IUser {
    user: string | null
}
const initialState: IUser = {
    user: null,
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<string> ) =>{
            state.user = action.payload
        },
        logoutUser: (state, action: PayloadAction<null>) => {
            state.user = action.payload
        }
    }
})
export const {loginUser, logoutUser} = userSlice.actions
export default userSlice.reducer