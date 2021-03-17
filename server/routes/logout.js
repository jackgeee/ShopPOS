const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

//SET LOGGED_IN == FALSE//

app.patch("/logout", async (req, res) => {
  try {
    const { user_name } = req.body;
    const user_check = await pool.query(
      "UPDATE users SET logged_in = FALSE WHERE user_name = $1",
      [user_name]
    );
    res.json("user logged out");
  } catch (error) {
    console.error(error.message);
  }
});

