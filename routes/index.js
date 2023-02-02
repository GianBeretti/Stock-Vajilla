const express = require('express');
const usuariosRouter = require('./usuariosRouter')
const customerRouter = require('./customers.router')

function routerApi(app){
    const router = express.Router()
    app.use('/usuarios', usuariosRouter)
    app.use('/customers', customerRouter)
};

module.exports = routerApi