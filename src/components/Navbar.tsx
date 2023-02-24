import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  PaletteMode,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { logoutUser } from "../features/userSlice";
import {ListItem, ListItemButton, ListItemIcon, Switch} from "@mui/material"
import { ModeNight } from "@mui/icons-material";
import { setMode } from "../features/modeSlice";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  // },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const user = useSelector((state: RootState)=>state.userSlice.user)
  const mode = useSelector((state: RootState)=>state.modeSlice.mode)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <AppBar position="sticky" sx={{ overflow: 'hidden'}}>
      <StyledToolbar >
        <Typography variant="h6"  sx={{ display: { xs: "none", sm: "block" } }}>
          Facebook Clone
        </Typography>
        <Pets sx={{ display: { xs: "flex", sm: "none" }, alignItems: 'flex-start' }} />
        {user ? <Search>
          <InputBase placeholder="search..." />
        </Search> : null}
       { user ? null : <ListItem disablePadding  sx={{width: {sm: '100px',  lg: '30%'}} }>
              <ListItemButton >
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={()=>{mode === 'dark' ? dispatch(setMode('light')) : dispatch(setMode('dark')) }}/>
              </ListItemButton>
            </ListItem> }
       { user ? <Icons>
          <Badge badgeContent={4} color="error" sx={{display: {xs: 'none', md: 'flex'}}}>
            <Mail sx={{cursor: 'pointer'}}/>
          </Badge>
          <Badge badgeContent={2} color="error" sx={{display: {xs: 'none', md: 'flex'}}}>
            <Notifications sx={{cursor: 'pointer'}}/>
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons> : null}
        {/* { user ? null :<UserBox onClick={(e) => setOpen(true)} >
          <Avatar
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="subtitle1">John</Typography>
        </UserBox>} */}
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={()=>dispatch(logoutUser(false))}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;