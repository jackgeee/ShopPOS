import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import user from './App';
// import admin from './App'
import {Admin, User} from "./App";

import { BrowserRouter } from 'react-router-dom';
import Cookies from "js-cookie";

const admin_logged = Cookies.get("admin_name");
const user_logged = Cookies.get("user_name");
console.log(admin_logged);
console.log(user_logged);


if (admin_logged) {

ReactDOM.render(
  <BrowserRouter>
    <Admin />
  </BrowserRouter>,
  document.getElementById('root')
);
}
if (user_logged) {
 
ReactDOM.render(
  <BrowserRouter>
  <User />
  </BrowserRouter>,
  document.getElementById('root')
);

}