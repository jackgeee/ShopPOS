import React, { Fragment } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";

import InputProducts from "./components/Products/InputProducts";
import ListProducts from "./components/Products/ListProducts";

function App() {
  return (
    <Fragment>
      <div>
        {/* <InputProducts />
        <ListProducts /> */}
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
        <NavLink exact activeClassName= "current" to ='/mainpage'>Main Page</NavLink>
      </li>
      <li>
      <NavLink exact activeClassName= "current" to ='/signup'>Sign Up</NavLink>
      </li>
    </ul>
  </nav>
);

// VIEWS //

const MainPage = () => (
  <div className="mainpage">
    <h1>Welcome</h1>
    <p>hello</p>
  </div>
);

const Signup = () => (
  <div className="signup">
    <h1>signup</h1>
    <p>please sign up</p>
  </div>
);

//

const Main = () => (
  <Switch>
    <Route exact path="/mainpage" component={MainPage}></Route>
    <Route exact path="/signup" component={Signup}></Route>
  </Switch>
);

export default App;
