import { AppBar, Box, ListItemButton, ListItemIcon, Stack, Switch, ThemeProvider, Typography, PaletteMode, createTheme, ListItem, Paper, TextField, Button} from "@mui/material";
import { width } from "@mui/system";
import { useState } from "react";
import Add from "../components/Add";
import Feed from "../components/Feed";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Rightbar from "../components/Rightbar";

const LoginPage = () => {
    const [mode, setMode] = useState<PaletteMode>("light");
    const darkTheme = createTheme({
        palette: {
          mode: mode,
        },
      });
    return ( 
        <>
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"} >
        <ResponsiveAppBar setMode={setMode} mode={mode}/>
        <Stack direction="row" spacing={2} p={4} paddingRight={10} justifyContent="space-around" alignContent="center" alignItems="center"  minHeight="90vh">
          <Box flex={1}  p={4} marginBottom={10} marginLeft={7}>
            <Typography variant="h2" color="blue"  marginBottom={2}>
                Facebook
            </Typography>
            <Typography variant="h4" width={500} > 
                Connect with friends and the world around you on Facebook.
            </Typography>
          </Box>
          <Box>
            <Paper elevation={4}  sx={{p: 1, margin: '20px', display: 'flex' , alignItems: 'center', flex: 1,     flexDirection: 'column', gap: 2, minHeight: 400, minWidth: 550,}}>
            <Typography variant="h3" m={5}>
                
            </Typography>
            <TextField id="outlined-basic" label="Login" variant="outlined" sx={{minWidth: '50%'}} />
            <TextField id="outlined-basic" label="Password" variant="outlined" sx={{minWidth: '50%'}} />
            <Button variant="outlined" size="large" sx={{minWidth: '50%', marginTop: 4}}>Log in</Button>
                
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
}
 
export default LoginPage;