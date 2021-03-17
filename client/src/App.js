import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
// import Cookies from "js-cookie";

import ProductsPage from "./views/ProductsPage";
import ProductsPageUser from "./views/ProductsPageUser";
import LandingPage from "./views/LandingPage";
import SignupPage from "./views/SignupPage";
import LoginPage from "./views/LoginPage";
import LoginAdminPage from "./views/LoginAdminPage";
import LogoutUser from "./components/Auth/LogoutUser";
import LogoutAdmin from "./components/Auth/LogoutAdmin";

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
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/landingpage">
          Main Page
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/products_user">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/signup">
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login">
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login_admin">
          Log in Administrator
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
          Log out
        </NavLink>
      </li>
    </ul>
  </nav>
);

const NavigationAdmin = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/landingpage">
          Main Page
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/signup">
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login">
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/login_admin">
          Log in Administrator
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
    <Route exact path="/signup" component={SignupPage}></Route>
    <Route exact path="/login" component={LoginPage}></Route>
    <Route exact path="/login_admin" component={LoginAdminPage}></Route>
  </Switch>
);

const MainUser = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage}></Route>
    <Route exact path="/products_user" component={ProductsPageUser}></Route>
    <Route exact path="/signup" component={SignupPage}></Route>
    <Route exact path="/login" component={LoginPage}></Route>
    <Route exact path="/login_admin" component={LoginAdminPage}></Route>
  </Switch>
);



export const Admin = adminApp;
export const User = userApp;
