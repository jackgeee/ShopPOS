import React, { Fragment, useState } from "react";

import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";


import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { pink, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 50,
      margin: 50,
    },
    body: {
      fontSize: 101,
    },
  },
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

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
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" align="center">
          <Typography variant="h1" align="center">
            Sign up
          </Typography>
          <form onSubmit={onSubmitForm} className="mt-5 text-center">
            <FormControl>
              <TextField
                variant="outlined"
                label="Username"
                type="text"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Email"
                type="text"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Confirm Password"
                type="password"
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="primary"
                endIcon={<PersonAddIcon />}
              >
                Sign Up
              </Button>
            </FormControl>
          </form>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default SignupUser;
