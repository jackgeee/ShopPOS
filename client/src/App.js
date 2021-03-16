import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";


import ProductsPage from "./views/ProductsPage";
import LandingPage from "./views/LandingPage";
import SignupPage from "./views/SignupPage";


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
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={LandingPage}></Route>
    <Route exact path="/products" component={ProductsPage}></Route>
    <Route exact path="/signup" component={SignupPage}></Route>
  </Switch>
);

export default App;
