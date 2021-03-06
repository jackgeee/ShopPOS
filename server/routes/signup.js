const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// INSERT A NON-ADMIN USER //

app.post("/signup", async (req, res) => {
  try {
    const { user_name, user_password, user_email } = req.body;
    if (!(user_name && user_email && user_password)) {
      alert("Please fill out all fields");
      return res.status(400).send({ error: "Invalid Format" });
    }

    const user_check = await pool.query(
      "SELECT 1 FROM users WHERE user_name = $1",
      [user_name]
    );

    if (user_check.rows.length > 0) {
      console.log("Username already taken");
      return res.status(400).send({ error: "user already exists" });
    }

    const new_user = await pool.query(
      "INSERT INTO users (user_name, user_password, user_email, logged_in) VALUES($1, crypt($2, gen_salt('bf', 8)), $3, TRUE)",
      [user_name, user_password, user_email]
    );
    const user_logged_in = await pool.query(
      "UPDATE users SET logged_in = TRUE WHERE user_name = $1",
      [user_name]
    );
    res.json("User signed up");
  } catch (error) {
    console.log(error.message);
  }
});

// INSERT ADMIN USER //

app.post("/signup_admin", async (req, res) => {
  try {
    const { admin_name, admin_password } = req.body;
    if (!(admin_name && admin_password)) {
      alert("Please fill out all fields");
      return res.status(400).send({ error: "Invalid Format" });
    }
    const admin_check = await pool.query(
      "SELECT 1 FROM admins WHERE admin_name = $1",
      [admin_name]
    );
    console.log(admin_check.rows);

    if (admin_check.rows.length > 0) {
      console.log("admin already taken");
      return res.status(400).send({ error: "admin already exists" });
    }

    const new_admin = await pool.query(
      "INSERT INTO admins (admin_name, admin_password) VALUES($1, crypt($2, gen_salt('bf', 8))) RETURNING *",
      [admin_name, admin_password]
    );
    const admin_logged_in = await pool.query(
      "UPDATE admins SET logged_in = TRUE WHERE admin_name = $1",
      [admin_name]
    );

    res.json(new_admin.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// GET NON ADMIN USER //
app.get("/signup/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(product.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});
