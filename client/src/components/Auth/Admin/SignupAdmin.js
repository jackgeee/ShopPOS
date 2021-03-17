import React, { Fragment, useState } from "react";

const SignupAdmin = () => {
  const [admin_name, setAdminName] = useState("");
  const [admin_password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (admin_password === confirm_password) {
      try {
        const body = { admin_name, admin_password };
        const response = await fetch("http://localhost:5000/signup_admin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        window.location = "http://localhost:3000/products";
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

export default SignupAdmin;
