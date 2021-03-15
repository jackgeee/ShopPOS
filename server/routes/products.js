const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// INSERT A PRODUCT //
app.post("/products", async (req, res) => {
  try {
    const {
      product_name,
      product_description,
      product_price,
      product_image,
    } = req.body;
    const new_product = await pool.query(
      "INSERT INTO products (product_name, product_description, product_price, product_image) VALUES($1, $2, $3, $4) RETURNING *",
      [product_name, product_description, product_price, product_image]
    );
    res.json(new_product.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET A PRODUCT //
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query(
      "SELECT * FROM products WHERE product_id = $1",
      [id]
    );
    res.json(product.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// GET ALL PRODUCTS //
app.get("/products", async (req, res) => {
  try {
    const all_products = await pool.query("SELECT * FROM products");
    res.json(all_products.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// DELETE A PRODUCT //
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM products WHERE product_id = $1",
      [id]
    );
    res.json("Product deleted");
  } catch (error) {
    console.log(error.message);
  }
});
