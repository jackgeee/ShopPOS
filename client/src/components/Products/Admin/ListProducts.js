import React, { Fragment, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditProducts from "./EditProducts";

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

  const deleteProduct = async (id) => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/products/${id}`,
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
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Edit Product</th>
            <th>Delete Product</th>
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
                <EditProducts product={product} />
              </td>
              <td>
                <Button
                  endIcon={<DeleteForeverIcon />}
                  variant="outlined"
                  size="small"
                  onClick={() => deleteProduct(product.product_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListProducts;
