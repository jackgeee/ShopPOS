import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import "fontsource-roboto";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
import Container from "@material-ui/core/Container";

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
    <Container>
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
              endIcon={<ShopIcon />}
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
              endIcon={<ShoppingCartIcon />}
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
              endIcon={<PersonAddIcon />}
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
              endIcon={<LockOpenIcon />}
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
              endIcon={<ExitToAppIcon />}
            >
              Log out
            </Button>
          </NavLink>
        </li>
      </ul>
    </Container>
  </nav>
);

const NavigationAdmin = () => (
  <nav>
    <ul>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
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
        <NavLink exact activeClassName="current" to="/products">
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
        <NavLink exact activeClassName="current" to="/signup_admin">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Signup Administrator
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login_admin">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Login Administrator
          </Button>
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/signup_user">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<PersonAddIcon />}
          >
            Signup User
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
            Login User
          </Button>
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
          <Button
            variant="contained"
            size="medium"
            color="primary"
            endIcon={<HomeIcon />}
          >
            Log Out Administrator
          </Button>
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
    <Route exact path="/signup_user" component={SignupPage}></Route>
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
