import React, { Fragment, useState } from "react";

const LoginUser = () => {
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
      console.log(data);
    if (data === true) {
        // window.location  = ("http://localhost:3000/landingpage")
    }
    else {
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
