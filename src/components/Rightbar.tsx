import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
import { useNavigate } from "react-router-dom";
  
  const Rightbar = () => {
    const navigate = useNavigate()
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7} sx={{cursor: 'pointer'}} onClick={()=>navigate('/FriendsPage')}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Car this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" - In love with my new car! 🚗 #newride #speedlover"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" - Just had the best vacation in Hawaii! Can't wait to go back 🌴🌊 #beachlife #paradise"

}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Redux!!!"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — I hate redux toolkit!!! It`s so hard...'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;