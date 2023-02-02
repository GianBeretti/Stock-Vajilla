const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const role = Joi.string();
const password = Joi.string().min(8)


const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

const getUserSchema = Joi.object({
    id: id.required()
})

const deleteUserSchema = Joi.object({
    id: id.required()
})

const updateUserSchema = Joi.object({
    email: email.required(),
    role: role.required()
})



module.exports = {getUserSchema, createUserSchema, deleteUserSchema, updateUserSchema}