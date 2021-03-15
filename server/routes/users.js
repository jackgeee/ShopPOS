const express = require("express");
const pool = require("../db");
const app = (module.exports = express());


// INSERT A NON-ADMIN USER //

app.post("/signup", async (req, res) => {
  try {
    const { user_name, user_password, user_email } = req.body;
    if (!(user_name && user_email && user_password)) {
        alert("Please fill out all fields");
        return res.status(400).send({error: "Invalid Format"})
    }
    const new_user = await pool.query(
      "INSERT INTO users (user_name, user_password, user_email) VALUES($1, crypt($2, gen_salt('bf', 8)), $3) RETURNING *",
      [user_name, user_password, user_email]
    );
    res.json(new_user.rows);
  } catch (error) {
    console.log(error.message);
  }
});
