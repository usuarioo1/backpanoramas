const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bbdd = require('./config/database');
const planRouter = require('./routes/panoramaRouter');


//llamar a express
const app = express();
//ADMISIONES PARA LA WEB
app.use(cors());
//SERVIDOTR ENTIENDA JSON
app.use(express.json());


//Rutas
app.use(planRouter);
//BBDD

bbdd();


// LEVANTAMIENTO DEL SERVIDO

app.listen(process.env.PORT, () => {
    console.log( ` Contado al servidor en el puerto: ${process.env.PORT}`)
})