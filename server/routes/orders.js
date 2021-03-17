const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// INSERT A PRODUCT INTO CART  //
app.post("/shopping_cart", async (req, res) => {
  try {
    const { product_name, product_id, quantity, user_name } = req.body;
    const insert_product = await pool.query(
      "INSERT INTO shopping_cart (product_name, product_id, quantity, user_name) VALUES ($1, $2, $3, $4) RETURNING *",
      [product_name, product_id, quantity, user_name]
    );
    res.json(insert_product.rows);
  } catch (error) {
    console.error(error.message);
  }
});
