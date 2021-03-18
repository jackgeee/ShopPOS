import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import "fontsource-roboto";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import HomeIcon from '@material-ui/icons/Home';
// import Cookies from "js-cookie";

import ProductsPage from "./views/Admin/ProductsPage";
import ProductsPageUser from "./views/User/ProductsPageUser";
import LandingPage from "./views/User/LandingPage";
import SignupPage from "./views/User/SignupPage";
import SignupPageAdmin from "./views/Admin/SignupPageAdmin";
import LoginPage from "./views/User/LoginPage";
import LoginAdminPage from "./views/Admin/LoginAdminPage";
import LogoutUser from "./components/Auth/User/LogoutUser";
import LogoutAdmin from "./components/Auth/Admin/LogoutAdmin";
import UserCart from "./components/Products/User/UserCart";

function adminApp() {
  return (
    <Fragment>
      <div>
        <NavigationAdmin />
        <Main />
      </div>
    </Fragment>
  );
}

{
  /* <AppBar>
  <ToolBar>
    <IconButton>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">Hello</Typography>
  </ToolBar>
</AppBar>; */
}

function userApp() {
  return (
    <Fragment>
      <div>
        <NavigationUser />
        <MainUser />
      </div>
    </Fragment>
  );
}

const NavigationUser = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/landingpage">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Home
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/products_user">
        <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Products
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/user_cart">
        <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Cart
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/signup_user">
        <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Sign up
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login_user">
        <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Log in
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="logout"
          exact
          to="/logout"
          onClick={() => {
            LogoutUser();
          }}
        >
           <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Log out
          </Button>
        </NavLink>
      </li>
    </ul>
  </nav>
);

const NavigationAdmin = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/signup_admin">
          Sign up Admin
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login_admin">
          Log in Administrator
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login_user">
          Log in User
        </NavLink>
      </li>
      <li>
        <NavLink
          className="logout"
          exact
          to="/logout"
          onClick={() => {
            LogoutAdmin();
          }}
        >
          Log out
        </NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage}></Route>
    <Route exact path="/products" component={ProductsPage}></Route>
    <Route exact path="/signup_admin" component={SignupPageAdmin}></Route>
    <Route exact path="/login_admin" component={LoginAdminPage}></Route>
    <Route exact path="/login_user" component={LoginPage}></Route>
  </Switch>
);

const MainUser = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage}></Route>
    <Route exact path="/products_user" component={ProductsPageUser}></Route>
    <Route exact path="/signup_user" component={SignupPage}></Route>
    <Route exact path="/login_user" component={LoginPage}></Route>
    <Route exact path="/user_cart" component={UserCart}></Route>
  </Switch>
);

export const Admin = adminApp;
export const User = userApp;
