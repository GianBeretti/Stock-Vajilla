const express = require('express');
const CustomerService = require('./../services/customer.service');
const validatorHandler = require('./../middleware/validatorHandler')
const {getCustomerSchema, createUserSchema, updateCustomerSchema} = require('./../schemas/customer.schema');
const { async } = require('jshint/src/prod-params');

const router = express.Router();
const service = new CustomerService();


router.get('/',
async(req, res, next) => {
    try {
        const customers = await service.find();
        res.json(customers)
    } catch (error) {
        next(error)
    }
});

router.get('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
    try {
        const customer = await service.findOne(id);
        res.json(customer)
    } catch (error) {
        next(error)
    }
})
router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const customer = await service.create(body);
            res.json(customer);
        } catch (error) {
            next(error);
        }
    });

router.patch('/:id',
    validatorHandler(updateCustomerSchema, 'body'),
    validatorHandler(getCustomerSchema, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const changs = await service.update(id, body);
            res.json(changs)
        } catch (error) {
            next(error)
        }
});

router.delete('/:id',
validatorHandler(getCustomerSchema, 'params'),
async(req, res, next) => {
    try {
        const user = service.delete();
        res.json()
    } catch (error) {
        
    }
})


    module.exports = router