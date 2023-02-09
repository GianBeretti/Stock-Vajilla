const Joi = require('joi');

const customerId = Joi.number().integer();
const id = Joi.number().integer();
const stockId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();


const createStockSchema = Joi.object({
    customerId: customerId.required()
})

const getStockSchema = Joi.object({
    id: id.required()
})

const addItemSchema = Joi.object({
    stockId: stockId.required(),
    productId: productId.required(),
    amount: amount.required()
})



module.exports = {createStockSchema, getStockSchema, addItemSchema}