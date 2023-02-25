import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IMode {
    mode: PaletteMode
}
const initialState: IMode = {
    mode: 'light',
}

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<PaletteMode> ) =>{
            state.mode = action.payload
        },
    }
})
export const {setMode} = modeSlice.actions
export default modeSlice.reducer