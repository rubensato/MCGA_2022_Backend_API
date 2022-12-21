const express = require('express');

/* EXPRESS*/
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* MONGOOSE - CONEXION A BASE DE DATOS*/
require('./config/db');


app.get('/', (req, res) => {
    res.send('Servidor ok');
  });

/* SERVER RUNNING AND LISTENING PORT*/
app.listen(process.env.PORT || 3000, () => {
    console.log(
      `MCGA_2022_Backend_API ~ Online - Running on PORT: ${process.env.PORT || 3000}`
    );
  });
  