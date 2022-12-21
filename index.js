const express = require("express");
const cors = require("cors");

/* EXPRESS*/
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* MONGOOSE - CONEXION A BASE DE DATOS*/
require("./config/db");

/* CORS*/
app.use(cors());

/* ROUTES */
const supplierRoutes = require("./routes/supplier");
app.use("/api/supplier", supplierRoutes());
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes());

/* EXPRESS SERVER RUNNING OK*/
app.get("/", (req, res) => {
  res.send("Servidor ok");
});

/* EXPRESS SERVER RUNNING AND LISTENING PORT*/
app.listen(process.env.PORT || 3000, () => {
  console.log(
    `MCGA_2022_Backend_API ~ Online - Running on PORT: ${
      process.env.PORT || 3000
    }`
  );
});
