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
import { green, blue } from "@material-ui/core/colors";

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
      main: green[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

const SignupAdmin = () => {

  function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }

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
        createCookie("admin_name", admin_name);
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
            Sign up an Administrator
          </Typography>
          <form onSubmit={onSubmitForm} className="mt-5 text-center">
            <FormControl>
              <TextField
                variant="outlined"
                label="Admin Name"
                type="text"
                value={admin_name}
                onChange={(e) => setAdminName(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                value={admin_password}
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

export default SignupAdmin;
