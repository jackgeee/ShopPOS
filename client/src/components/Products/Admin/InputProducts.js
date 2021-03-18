import React, { Fragment, useState } from "react";

import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
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

const TextFieldProducts = () => {
  const [product_name, setName] = useState("");
  const [product_description, setDescription] = useState("");
  const [product_price, setPrice] = useState(0);
  const [product_image, setImage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        product_name,
        product_description,
        product_price,
        product_image,
      };
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "http://localhost:3000/products";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" align="center">
        <Typography variant="h1" align="center">
            Add inventory 
          </Typography>
          <form onSubmit={onSubmitForm} className="mt-5 text-center">
          <FormControl>
            <TextField
              variant = "outlined"
              label = "Product Name"
              type="text"
              value={product_name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <textarea
              variant = "outlined"
              label = "Description"
              type="text"
              value={product_description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <TextField
               variant = "outlined"
               label = "Price"
              type="number"
              step="0.01"
              value={product_price}
              onChange={(e) => setPrice(e.target.value)}
            ></TextField>
            <TextField
              variant = "outlined"
              label = "Image URL"
              type="text"
              value={product_image}
              onChange={(e) => setImage(e.target.value)}
            ></TextField>
            <button>Add product</button>
            </FormControl>
          </form>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
};

export default TextFieldProducts;
