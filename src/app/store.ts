import { configureStore } from '@reduxjs/toolkit'
// ...
 import userSlice from '../features/userSlice'
 import postsSlice from '../features/postsSlice'
 import modeSlice from '../features/modeSlice'
export const store = configureStore({
  reducer: {
    userSlice,
    postsSlice,
    modeSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

