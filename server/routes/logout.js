const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

//LOGOUT USER//

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


// LOUGOUT ADMIN // 

app.patch("/logout_admin", async (req, res) => {
    try {
      const { admin_name } = req.body;
      const admin_check = await pool.query(
        "UPDATE admins SET logged_in = FALSE WHERE admin_name = $1",
        [admin_name]
      );
      res.json("admin logged out");
    } catch (error) {
      console.error(error.message);
    }
  });