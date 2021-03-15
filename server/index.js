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

// // ROUTES //

// // INSERT A DOCTOR //
// app.post("/doctors", async (req, res) => {
//   try {
//     const { doctor_name } = req.body;
//     const newDoctor = await pool.query(
//       "INSERT INTO doctors (doctor_name) VALUES($1) RETURNING *",
//       [doctor_name]
//     );
//     res.json(newDoctor.rows[0]);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// // GET A DOCTOR //
// app.get("/doctors/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const doctor = await pool.query(
//       "SELECT * FROM doctors WHERE doctor_id = $1",
//       [id]
//     );
//     res.json(doctor.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// // GET ALL DOCTORS //
// app.get("/doctors", async (req, res) => {
//   try {
//     const allDoctors = await pool.query("SELECT * FROM doctors");
//     res.json(allDoctors.rows);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// // EDIT A DOCTOR //
// app.put("/doctors/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { doctor_name } = req.body;
//     const updateDoctor = await pool.query(
//       "UPDATE doctors SET doctor_name = $1 WHERE doctor_id = $2",
//       [doctor_name, id]
//     );
//     res.json("Doctor updated");
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// // DELETE A DOCTOR //
// app.delete("/doctors/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteDoctor = await pool.query(
//       "DELETE FROM doctors WHERE doctor_id = $1",
//       [id]
//     );
//     res.json("Doctor deleted");
//   } catch (error) {
//     console.error(error.message);
//   }
// });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
