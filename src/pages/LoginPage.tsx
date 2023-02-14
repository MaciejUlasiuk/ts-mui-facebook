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
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { loginUser } from "../features/userSlice";

const LoginPage = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorLoginState, setErrorLoginState] = useState(false)
  const [errorPassState, setErrorPassState] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const handleLogin = (login: string, password: string) => {
    if(login!=='Admin') setErrorLoginState(true)
    if(password!=='Admin') setErrorPassState(true)
    else
    {
      console.log('it works')
      navigate("/MainPage")

    }
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <ResponsiveAppBar setMode={setMode} mode={mode} />
          <Stack
            direction="row"
            spacing={2}
            p={4}
            paddingRight={10}
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
            minHeight="90vh"
          >
            <Box flex={1} p={4} marginBottom={10} marginLeft={7} sx={{display: {xs: 'none', lg: "block"}}}>
              <Typography variant="h2" color="blue" marginBottom={2}>
                Facebook
              </Typography>
              <Typography variant="h4" width={500}>
                Connect with friends and the world around you on Facebook.
              </Typography>
            </Box>
            <Box>
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
                  minWidth: 550,
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
                />
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ minWidth: "50%", marginTop: 4 }}
                  onClick={()=>handleLogin(login, password)}
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
      </ThemeProvider>
    </>
  );
};

export default LoginPage;
