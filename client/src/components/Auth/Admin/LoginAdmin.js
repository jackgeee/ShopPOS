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
      if (data === true) {
        createCookie("admin_name", admin_name);
        window.location = "http://localhost:3000/products";
      } else {
        window.alert("Wrong admin_name or password");
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
        <Container maxWidth="lg" align="center" background-color>
         
          <Typography variant="h1" align="center">
            Please login to update inventory
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

export default LoginAdmin;
