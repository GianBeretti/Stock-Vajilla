const passport = require('passport');
const express = require('express');
const StockService = require('../services/stock.service');
const validatorHandler = require('../middleware/validatorHandler')
const {createStockSchema, getStockSchema, addItemSchema} = require('../schemas/order.schema');

const router = express.Router();
const service = new StockService();


router.post('/',
    validatorHandler(createStockSchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const newStock = await service.create(body);
            console.log(newStock)
            res.json(newStock)  
        } catch (error) {
            next(error)
        }
    } )

router.get('/:id', 
    validatorHandler(getStockSchema, 'params'),
    async (req, res, next ) => {
    try {
        const {id} = req.params
        const orders = await service.findOne(id)
        res.json(orders)  

    } catch (error) {
        next(error)
    }
})

router.post('/add-item',
    validatorHandler(addItemSchema, 'body'),
    async(req, res, next) => {
        const body = req.body;
        const productsOrder = await service.addItem(body)
        res.json(productsOrder)
    })




    module.exports = router