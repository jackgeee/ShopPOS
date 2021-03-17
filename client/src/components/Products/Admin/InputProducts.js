import React, { Fragment, useState } from "react";

const InputProducts = () => {
  const [product_name, setName] = useState("");
  const [product_description, setDescription] = useState("");
  const [product_price, setPrice] = useState(0);
  const [product_image, setImage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { product_name, product_description, product_price, product_image };
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
      <h1 className = "mt-5 text-center">Products</h1>
      <form onSubmit={onSubmitForm} className = "mt-5 text-center">
        <input
          placeholder = "Name"
          type="text"
          value={product_name}
          onChange={(e) => setName(e.target.value)}
        ></input>
         <textarea
          placeholder = "Description"
          type="text"
          value={product_description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
          <input
          placeholder = "Price"
          type="number"
          step="0.01"
          value={product_price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
          <input
          placeholder = "Image URL"
          type="text"
          value={product_image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button>Add product</button>
      </form>
    </Fragment>
  );
};

export default InputProducts;
