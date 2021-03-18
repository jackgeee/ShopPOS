import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";


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
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const LoginUser = () => {
  function createCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }

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
        createCookie("user_name", user_name);
        // var test = Cookies.get("user_name");
        // console.log(test);
        window.location = "http://localhost:3000/landingpage";
      } else {
        window.alert("Wrong username or password");
      }
    } catch (error) {
      console.error(error.message);
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
            Login to start shopping!
          </Typography>
          <form
            onSubmit={(e) => {
              SendData(e);
            }}
            className="mt-5 text-center"
          >
            <FormControl>
              <TextField
                variant="outlined"
                size="small"
                label="Username"
                type="text"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
              ></TextField>
              <TextField
                variant="outlined"
                size="small"
                label="Password"
                type="password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="primary"
                endIcon={<LockOpenIcon />}
              >
                Login
              </Button>
            </FormControl>
          </form>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default LoginUser;
