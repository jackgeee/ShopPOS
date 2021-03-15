const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

const Product_Routes = require("./routes/products");
const Signup_Routes = require("./routes/signup");
const Login_Routes = require("./routes/login");

app.use(Product_Routes);
app.use(Signup_Routes);
app.use(Login_Routes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
