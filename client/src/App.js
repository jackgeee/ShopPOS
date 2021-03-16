import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import Cookies from 'js-cookie';


import ProductsPage from "./views/ProductsPage";
import LandingPage from "./views/LandingPage";
import SignupPage from "./views/SignupPage";
import LoginPage from "./views/LoginPage";

var test = Cookies.get('test_cookie')
console.log(test);

function App() {
  return (
    <Fragment>
      <div>
        <Navigation />
        <Main />
      </div>
    </Fragment>
  );
}

const Navigation = () => (
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
        <NavLink className = "logout" exact to="/logout">
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
  </Switch>
);

export default App;
