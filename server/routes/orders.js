const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// INSERT A PRODUCT INTO CART  //
app.post("/shopping_cart", async (req, res) => {
  try {
    const {
      product_name,
      product_price,
      product_id,
      quantity,
      user_name,
      product_image
    } = req.body;
    const insert_product = await pool.query(
      "INSERT INTO shopping_cart (product_name, product_id, quantity, user_name, product_price, product_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [product_name, product_id, quantity, user_name, product_price, product_image]
    );
    res.json(insert_product.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//GET ALL PRODUCTS IN SPECIFIC USERS CART TO DISPLAY IN CART //
app.get("/shopping_cart/:user_name", async (req, res) => {
  try {
    const { user_name } = req.params;
    const products = await pool.query(
      "SELECT * FROM shopping_cart WHERE user_name = $1",
      [user_name]
    );
    res.json(products.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET ALL PRODUCTS IN SHOPPING CART //
app.get("/shopping_cart", async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM shopping_cart");
    res.json(products.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// DELETE A PRODUCT //
app.delete("/shopping_cart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await pool.query(
      "DELETE FROM shopping_cart WHERE product_id = $1",
      [id]
    );
    res.json("Product deleted");
  } catch (error) {
    console.log(error.message);
  }
});
