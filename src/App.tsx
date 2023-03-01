import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createHashRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from "react-router-dom";
import { RootState } from "./app/store";
import userSlice from "./features/userSlice";
import MainPage from "./pages/MainPage";
import FriendsPage from "./pages/FriendsPage";
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
    const user = useSelector((state: RootState) => state.userSlice.user)
    const mode = useSelector((state: RootState)=> state.modeSlice.mode)
    const [realMode, setMode] = useState(mode)
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     if(!user) navigate('/')
    // },[user])
    useEffect(()=>{
      realMode === 'dark' ? setMode('light') : setMode('dark')
      console.log('y')
    },[mode])
    const darkTheme = createTheme({
      palette: {
        mode: realMode,
      },
    });
    const router = createHashRouter(
        createRoutesFromElements(
          <>
          <Route path='/' element={user ? <MainPage/> : <LoginPage/>}/>
          <Route path='/MainPage' element={<MainPage/>} />
          <Route path='/FriendsPage' element={<FriendsPage/>}/>
          </>
        )
      )
    return (
        <>
        <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router}/>
        </ThemeProvider>
        </>
         
    );
}
 
export default App;