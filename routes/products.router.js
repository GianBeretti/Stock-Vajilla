const express = require('express');
const validatorHandler = require('./../middleware/validatorHandler');
const {getProductSchema, updateProductSchema, createProductSchema, queryProductSchema } = require('./../schemas/products.schema');
const ProductService = require('./../services/products.service')

const router = express.Router();
const service = new ProductService();


router.get('/',
    validatorHandler(queryProductSchema, 'query'),
    async(req, res, next) => {
    try {
        const products = await service.find(req.query);
        res.json(products)
    } catch (error) {
        next(error)
    }
})


router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const product = await service.findOne(id);
            res.json(product);  
        } catch (error) {
           next(error) 
        }
    })

    router.post('/',
    validatorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await service.create(body)
            console.log(newUser)
            res.json(newUser)
        } catch (error) {
            next(error)            
        }
})




module.exports = router