import React, { Fragment, useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import ReactTable from "react-table";  

import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>{product.product_description}</td>
              <td>{product.product_price}</td>
              <td>
                <img
                  src={product.product_image}
                  width="100"
                  height="100"
                  alt="product_image"
                />
              </td>
              <td>
                <Button
                >
                  <AddToCart product={product} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};

export default ListProducts;
