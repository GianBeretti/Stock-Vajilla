const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5);
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();


const getCustomerSchema = Joi.object({
    id: id.required()
})

const createUserSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone,
    user: Joi.object({
        email: email.required(),
        password: password.required()
    })
})

const updateCustomerSchema = Joi.object({
    name,
    lastName,
    phone,
    userId 
})


module.exports = {getCustomerSchema, createUserSchema, updateCustomerSchema}