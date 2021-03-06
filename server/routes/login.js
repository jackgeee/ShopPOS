const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// CHECK IF NON-ADMIN USER IN DB//

app.post("/login", async (req, res) => {
  try {
    const { user_name, user_password } = req.body;
    const user_check = await pool.query(
      "SELECT * FROM users WHERE user_name = $1 AND user_password = crypt($2, user_password)",
      [user_name, user_password]
    );
    if (user_check.rows.length > 0) {
      const user_logged_in = await pool.query(
        "UPDATE users SET logged_in = TRUE WHERE user_name = $1",
        [user_name]
      );
      res.json(true);
    } else {
      res.json("Wrong username or password");
    }
  } catch (error) {
    console.error(error.message);
  }
});

// CHECK IF ADMIN IN DB // 

app.post("/login_admin", async (req, res) => {
  try {
    const { admin_name, admin_password } = req.body;
    const admin_check = await pool.query(
      "SELECT * FROM admins WHERE admin_name = $1 AND admin_password = crypt($2, admin_password)",
      [admin_name, admin_password]
    );
    if (admin_check.rows.length > 0) {
      const admin_logged_in = await pool.query(
        "UPDATE admins SET logged_in = TRUE WHERE admin_name = $1",
        [admin_name]
      );
      res.json(true);
    } else {
      res.json("Wrong username or password");
    }
  } catch (error) {
    console.error(error.message);
  }
});


