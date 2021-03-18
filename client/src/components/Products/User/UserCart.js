import React, { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Button from "@material-ui/core/Button";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Container from "@material-ui/core/Container";

const user_name = Cookies.get("user_name");

const ListProductsInCart = () => {
  const [products, setProducts] = useState([]);

  // products.forEach((product) => console.log(product.user_name) );

  const getProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/shopping_cart/${user_name}`
      );

      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/shopping_cart/${id}`,
        {
          method: "DELETE",
        }
      );

      setProducts(products.filter((product) => product.product_id !== id));
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
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Container>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Remove From Cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.user_name}>
                <td>{product.product_name}</td>
                <td>{product.product_price}</td>
                <td>{product.quantity}</td>
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
                    endIcon={<RemoveShoppingCartIcon />}
                    variant="outlined"
                    size="sm"
                    onClick={() => removeFromCart(product.product_id)}
                  >
                    Remove from cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
};

export default ListProductsInCart;
