import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import user from './App';
// import admin from './App'
import {Admin, User, Init} from "./App";

import { BrowserRouter } from 'react-router-dom';
import Cookies from "js-cookie";


function createCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// RUN THIS ON INITIALIZATION 
createCookie("admin_name", "god");

const admin_logged = Cookies.get("admin_name");
const user_logged = Cookies.get("user_name");

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

// else {

// ReactDOM.render(
//   <BrowserRouter>
//   <Init />
//   </BrowserRouter>,
//   document.getElementById('root')
//   );

// }