const express = require('express');
const routerApi = require('./routes/index')
require('dotenv').config()
require('./utils/auth')
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 1000;


app.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT}`)
});


routerApi(app)