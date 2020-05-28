import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import {Route , NavLink} from 'react-router-dom';
import Menu from '../Menu/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 6,
  },
  cartIcon : {
    marginLeft: theme.spacing(60),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Button color="inherit" className={classes.menuButton}>Home</Button>
          {/* <Button color="inherit" className={classes.menuButton}>Menu</Button> */}
          <NavLink 
          to = "/Menu"
          exact
          activeStyle={{
            color: '#fa923f',
            textDecoration: 'underline'
        }}>
              Menu
          </NavLink>
          {/* <Button color="inherit" className={classes.cartIcon}>Login</Button> */}
          <IconButton
                // aria-label="account of current user"
                // aria-controls="menu-appbar"
                // aria-haspopup="true"
                className={classes.cartIcon}
                // onClick={handleMenu}
                color="inherit"
              >
                <ShoppingCartIcon />
              </IconButton>
        </Toolbar>
      </AppBar>
      <Route path = "/Menu" component = {Menu}></Route>
    </div>
  );
}
