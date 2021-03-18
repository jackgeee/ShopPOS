import React, { Fragment, useEffect, useState } from "react";
import AddToCart from "./AddToCart";

import Button from "@material-ui/core/Button";
import "fontsource-roboto";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { amber, green } from "@material-ui/core/colors";

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
      main: amber[500],
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
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <ThemeProvider theme={theme}>
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
                    <Button>
                      <AddToCart product={product} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

export default ListProducts;
