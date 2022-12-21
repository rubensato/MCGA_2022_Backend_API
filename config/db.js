const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

mongoose
  .connect(process.env.MONGODB_URI, { UseNewUrlParser: true })
  .then(() => {
    console.log(`Database: DBMCGA_2022_Suppliers on MongoDB Atlas ..... Ok`);
  })
  .catch((e) => {
    console.error(e);
  });
