const express = require('express');
const usuariosRouter = require('./usuariosRouter')
const customerRouter = require('./customers.router')
const productsRouter = require('./products.router')
const categoryRouter = require('./category.router')
const stockRouter = require('./stock.router')
const authRouter = require('./auth.router')

function routerApi(app){
    const router = express.Router()
    app.use('/usuarios', usuariosRouter)
    app.use('/customers', customerRouter)
    app.use('/products', productsRouter)
    app.use('/categories', categoryRouter)
    app.use('/stocks', stockRouter)
    app.use('/auth', authRouter)
};

module.exports = routerApi