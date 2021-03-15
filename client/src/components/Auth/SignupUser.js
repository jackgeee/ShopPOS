import React, { Fragment, useState } from "react";

const SignupUser = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");



    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = { userName, password };
          const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          window.location = "/";
        } catch (error) {
          console.error(error.message);
        }
      };



      return (
          <Fragment>
              <h1 className ="mt-5 text-center">Sign Up</h1>
          </Fragment>
      )

}


export default SignupUser;