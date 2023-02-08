const { create } = require('handlebars');
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const image = Joi.string();
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    categoryId: categoryId.required()
})

const updateProductSchema = Joi.object({
    name: name.required(),
    image: image.required()
})

const getProductSchema = Joi.object({
    id: id.required()
})

module.exports = {getProductSchema, updateProductSchema, createProductSchema}