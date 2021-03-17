import React, { Fragment, useState } from "react";

const SignupUser = () => {
  const [user_name, setUserName] = useState("");
  const [user_password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [user_email, setEmail] = useState("");
  
  

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (user_password === confirm_password) {
      try {
        const body = { user_name, user_password, user_email };
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        window.location = "http://localhost:3000/landingpage";
        return; 
      } catch (error) {
        console.error(error.message);
      }
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Sign Up</h1>
      <form onSubmit={onSubmitForm} className="mt-5 text-center">
        <input
          placeholder="Username"
          type="text"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          placeholder="Email"
          type="text"
          value={user_email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={user_password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button>Sign Up</button>
      </form>
    </Fragment>
  );
};

export default SignupUser;
