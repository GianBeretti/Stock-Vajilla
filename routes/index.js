const express = require('express');
const usuariosRouter = require('./usuariosRouter')

function routerApi(app){
    const router = express.Router()
    app.use('/usuarios', usuariosRouter)
};

module.exports = routerApi