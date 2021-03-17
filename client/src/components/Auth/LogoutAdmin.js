// import React, { Fragment, useState } from "react";
import Cookies from "js-cookie";

const LogoutAdmin = () => {

  const logOut = async () => {
    const admin_name = Cookies.get("admin_name");
    // console.log(user_name);
    try {
        const body = {admin_name};
        const log_out_admin = await fetch("http://localhost:5000/logout_admin", {
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

export default LogoutAdmin;
