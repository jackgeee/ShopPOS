const express = require("express");
const pool = require("../db");
const app = (module.exports = express());

// CHECK IF NON-ADMIN USER IN DB, SET LOGGED_IN SESSION//

app.post("/login", async (req, res) => {
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

// CHECK IF LOGGED_IN SESSION == TRUE // 

// app.get("/login", async (req, res) => {
//   try {
//     const { user_name } = req.body;
//     get_user_session = await pool.query(
//       "SELECT (logged_in) FROM users WHERE user_name = $1",
//       [user_name]
//     );
//     res.json(get_user_session.rows);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.post('/setcookie', function (req, res) {
//   const {user_name} = req.body;
//   req.cookie("user_name", user_name.data()).send('cookie set');
//   next();
// });


// app.get('/getcookie', function (req, res) {
//   res.cookie("user_name", "user_name").send('cookie set');
//   next();
// });
