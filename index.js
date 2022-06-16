require("dotenv").config(); //PARA las variables de entorno
const express = require('express');
const app = express()
const multer = require('multer');
const port = process.env.PORT || 3000;
const router= require('./routes/products_router')
app.use(express.json());//para habilitar la recepcion de datos en un request
app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('views', './views');
app.use(express.urlencoded({ extended: false }));



app.use('/', router);

app.listen(port, () => {console.log(`Conexion abierta en puerto  http://localhost:${port}`)});