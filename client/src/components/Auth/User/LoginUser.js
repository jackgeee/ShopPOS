import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 18,
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

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test</Button>;
}

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
        <Container maxWidth="sm">
          <Typography variant="h1">Welcome</Typography>

          <Grid container>
            <Grid item xs={12}>
              <Paper style={{ height: 75, width: "100%" }} />
            </Grid>
          </Grid>
          <h1 className="mt-5 text-center">Login</h1>
          <form
            onSubmit={(e) => {
              SendData(e);
            }}
            className="mt-5 text-center"
          >
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
          </form>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default LoginUser;
