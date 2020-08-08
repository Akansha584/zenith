import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, NavLink, Switch } from "react-router-dom";
import classes from "./Nav.css";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";
import Login from "../Login/login";
import { connect } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: 13,
    width: 8,
    height: 17,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: "12px",
  },
}))(Badge);

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.navbar}>
              <div>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </div>

              <div className={classes.innerNav}>
                <div>
                  <NavLink
                    className={classes.inactive}
                    to="/Home"
                    exact
                    activeClassName="active"
                    // activeStyle={classes.active}
                  >
                    Home
                  </NavLink>
                </div>

                <div> | </div>
                <div>
                  <NavLink
                    className={classes.inactive}
                    to="/Menu"
                    exact
                    activeClassName="active"
                    // activeStyle={classes.active}
                  >
                    Menu
                  </NavLink>
                </div>
              </div>

              <div>
                <NavLink
                  className={classes.inactive}
                  to="/Login"
                  exact
                  activeClassName="active"
                  // activeStyle={classes.active}
                >
                  <IconButton aria-label="Person">
                    <StyledBadge color="secondary">
                      <AccountCircleIcon />
                    </StyledBadge>
                  </IconButton>
                </NavLink>
                <NavLink
                  className={classes.inactive}
                  to="/Cart"
                  exact
                  activeClassName="active"
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={this.props.el} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </NavLink>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <Switch>
          {/* <Route path = "/Home" component ={Home}/> */}
          <Route path="/Menu" component={Menu} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    el: state.counterReducer.count.reduce((acc, item) => acc + item.qty, 0),
  };
};
export default connect(mapStateToProps)(Nav);
