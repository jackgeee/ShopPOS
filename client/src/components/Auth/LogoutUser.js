import React, { Fragment, useState } from "react";

const LogoutUser = () => {
 
  const logOut = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
    //   console.log(data);
    if (data === true) {
        window.location  = ("http://localhost:3000/landingpage")
    }
    else {
        window.alert("Wrong username or password");
    }
    } catch (error) {
      console.error(error.message);
    }
  };

}



export default LogoutUser;
