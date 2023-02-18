import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useEffect, useState } from "react";

const modeFromLocalStorage =
  JSON.parse(localStorage.getItem("mode") as string) || "dark";

function MainPage() {
  const [mode, setMode] = useState<PaletteMode>(modeFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
  }

export default MainPage;

