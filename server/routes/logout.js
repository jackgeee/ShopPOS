const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

//SET LOGGED_IN == FALSE//

app.post("/logout", async (req, res) => {
  try {
    const { user_name, user_password } = req.body;
    const user_check = await pool.query(
      "SELECT * FROM users WHERE user_name = $1 AND user_password = crypt($2, user_password)",
      [user_name, user_password]
    );
    if (user_check.rows.length !== 0) {
      res.json(user_check.rows[0]["logged_in"]);
      const user_logged_in = await pool.query(
        "UPDATE users SET logged_in = TRUE WHERE user_name = $1",
        [user_name]
      );
    } else {
      res.json("Wrong username or password");
    }
  } catch (error) {
    console.error(error.message);
  }
});

