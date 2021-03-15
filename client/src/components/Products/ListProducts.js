import React, { Fragment, useEffect, useState } from "react";
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
      const deleteProduct = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

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
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td>{product.product_name}</td>
              <td>{product.product_description}</td>
              <td>{product.product_price}</td>
              <td>
                <img src={product.product_image} width = "100" height = "100" alt = "product_image" />
              </td>
              <td><EditProducts product={product} /></td>
              <td>
              <button onClick={() => deleteProduct(product.product_id)}>
                Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListProducts;
