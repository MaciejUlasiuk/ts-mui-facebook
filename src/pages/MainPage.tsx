import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useEffect, useState } from "react";
import { fetchPosts } from "../features/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";



function MainPage() {
  

  
  return (
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
  );
  }

export default MainPage;

