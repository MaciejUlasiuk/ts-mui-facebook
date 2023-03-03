import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  PaletteMode,
  createTheme,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { loginUser } from "../features/userSlice";

const modeFromLocalStorage =
  JSON.parse(localStorage.getItem("mode") as string) || "dark";
  
const LoginPage = () => {
  const [mode, setMode] = useState<PaletteMode>(modeFromLocalStorage);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorLoginState, setErrorLoginState] = useState(false);
  const [errorPassState, setErrorPassState] = useState(false);
  const [loginTip, setLoginTip] = useState("");
  const [passTip, setPassTip] = useState("");

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
    console.log(mode)
  }, [mode]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value);
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = (login: string, password: string) => {
    if (login !== "Admin") {
      setErrorLoginState(true);
      setLoginTip("Login is Admin");
    }
    if (password !== "Admin") {
      setErrorPassState(true);
      setPassTip("Password is Admin");
    } else {
      dispatch(loginUser(true))
    }
  };
  
  return (
    <>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
          <Stack
            direction="row"
            spacing={2}
            paddingRight={{xs:4,md:10}}
            p={4}
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
            minHeight="90vh"
          >
            <Box
              flex={1}
              p={4}
              marginBottom={10}
              marginLeft={7}
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              <Typography variant="h2" color="blue" marginBottom={2}>
                Facebook
              </Typography>
              <Typography variant="h4" width={{xs: 300, md: 500}}>
                Connect with friends and the world around you on Facebook.
              </Typography>
            </Box>
            <Box m={0}>
              <Paper
                elevation={4}
                sx={{
                  p: 1,
                  margin: "20px",
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  flexDirection: "column",
                  gap: 2,
                  minHeight: 400,
                  minWidth: {xs: 250, md: 550 }
                }}
              >
                <Typography variant="h3" m={5}></Typography>
                <TextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  sx={{ minWidth: "50%" }}
                  error={errorLoginState}
                  value={login}
                  onChange={handleLoginInput}
                  helperText={loginTip}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  sx={{ minWidth: "50%" }}
                  type="password"
                  value={password}
                  onChange={handlePasswordInput}
                  error={errorPassState}
                  helperText={passTip}
                />
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ minWidth: "50%", marginTop: 4 }}
                  onClick={() => handleLogin(login, password)}
                >
                  Log in
                </Button>
              </Paper>
              <Typography variant="subtitle1" m={5} textAlign="center">
                Create a Page for a celebretiy, brand or business.
              </Typography>
            </Box>
          </Stack>
        </Box>
    </>
  );
};

export default LoginPage;
