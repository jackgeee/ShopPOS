import React, { Fragment, useState } from "react";
// import Cookies from "js-cookie";

const LoginAdmin = () => {
    
  function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }


  const [admin_name, setAdminName] = useState("");
  const [admin_password, setPassword] = useState("");

  const SendData = async (e) => {
    e.preventDefault();
    try {
      const body = { admin_name, admin_password };
      const response = await fetch("http://localhost:5000/login_admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
    //   console.log(data);
      if (data === true) {
        createCookie("admin_name", admin_name);
        // var test = Cookies.get("admin_name");
        // console.log(test);
        window.location  = ("http://localhost:3000/landingpage")
      } else {
        window.alert("Wrong admin_name or password");
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
          placeholder="adminname"
          type="text"
          value={admin_name}
          onChange={(e) => setAdminName(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={admin_password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </Fragment>
  );
};

export default LoginAdmin;
