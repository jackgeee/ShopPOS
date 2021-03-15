const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// GET NON-ADMIN USER//

app.get("/login", async (req, res) => {
  try {
    const { user_name, user_password } = req.body;
    const user_check = await pool.query(
      "SELECT * FROM users WHERE user_name = $1 AND user_password = crypt($2, user_password)",
      [user_name, user_password]
    );
    if(user_check.rows) {
        res.json("User logged in");
    }
  } catch (error) {
      console.error(error.message);
  }
});
