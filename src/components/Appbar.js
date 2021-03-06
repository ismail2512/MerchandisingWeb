import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { color } from '@mui/system';
const drawerWidth = 240;
const useStyles = (theme) => ({
  draw: {
    width: drawerWidth,
  },
});
function Appbar(props) {
  const navigate = useNavigate();
  const gotoPage = (routeName) => {
    navigate(`/${routeName}`);
  };
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <List disablePadding style={{ width: '300px' }}>
          <ListItem
            style={{
              backgroundColor: '#616161',
              paddingTop: '5%',
              paddingLeft: '40%',
            }}
          >
            <Avatar
              alt="Logo"
              src="https://www.daaemsolutions.com/test/images/daaem_login_logo.png"
              sx={{ width: 60, height: 60 }}
            />
          </ListItem>
          <ListItem
            style={{
              backgroundColor: '#616161',
              paddingTop: '5%',
              paddingLeft: '20%',
              color: 'white',
            }}
          >
            <Typography variant="h6">Daaem Mutawarah</Typography>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Home')}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Customers')}>
            <ListItemIcon>
              <CardMembershipOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Customers</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Products')}>
            <ListItemIcon>
              <CategoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText>SKU's</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Point-of-sales')}>
            <ListItemIcon>
              <AddShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Point Of Sale</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Team')}>
            <ListItemIcon>
              <GroupsOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Team</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Task')}>
            <ListItemIcon>
              <AddTaskOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Task Assignment</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Live-location')}>
            <ListItemIcon>
              <LocationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Employees Location</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => gotoPage('Reports')}>
            <ListItemIcon>
              <AnalyticsOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Reports</ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {props.name}
            </Typography>
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Logout
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Appbar;
