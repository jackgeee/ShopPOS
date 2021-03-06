const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(cookieParser());



const Product_Routes = require("./routes/products");
const Signup_Routes = require("./routes/signup");
const Login_Routes = require("./routes/login");
const Logout_Routes = require("./routes/logout");
const Order_Routes = require("./routes/orders");

app.use(Product_Routes);
app.use(Signup_Routes);
app.use(Login_Routes);
app.use(Logout_Routes);
app.use(Order_Routes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
