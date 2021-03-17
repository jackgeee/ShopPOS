import React, { Fragment, useState } from "react";
import Cookies from "js-cookie";

const LogoutUser = () => {

  const logOut = async () => {
    const user_name = Cookies.get("user_name");
    // console.log(user_name);
    try {
        const body = {user_name};
        const log_out_user = await fetch("http://localhost:5000/logout", {
            method: "PATCH", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),

        });
        window.location = ("http://localhost:3000/login");
    } catch (error) {
      console.error(error.message);
    }
  };
  logOut();

};

export default LogoutUser;
