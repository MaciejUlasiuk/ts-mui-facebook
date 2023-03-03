import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Friends from "../components/Friends";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const FriendsPage = () => {

  

  
    return ( 
      <>
    <Box bgcolor={"background.default"} color={"text.primary"} minHeight={'100vh'}>
    <Navbar/>
    <Friends/>
    <Sidebar />
    </Box>

      </> );
}
 
export default FriendsPage;