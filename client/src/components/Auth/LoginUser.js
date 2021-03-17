import React, { Fragment, useState } from "react";
import Cookies from "js-cookie";

const LoginUser = () => {
    
  function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }

//   function readCookie(name) {
//     var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0;i < ca.length;i++) {
// 		var c = ca[i];
// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
// 	}
// 	return null;
//   }

  const [user_name, setUserName] = useState("");
  const [user_password, setPassword] = useState("");

  const SendData = async (e) => {
    e.preventDefault();
    try {
      const body = { user_name, user_password };
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
    //   console.log(data);
      if (data === true) {
        createCookie("user_name", user_name);
        // var test = Cookies.get("user_name");
        // console.log(test);
        window.location  = ("http://localhost:3000/landingpage")
      } else {
        window.alert("Wrong username or password");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Login</h1>
      <form
        onSubmit={(e) => {
          SendData(e);
        }}
        className="mt-5 text-center"
      >
        <input
          placeholder="Username"
          type="text"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={user_password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </Fragment>
  );
};

export default LoginUser;
