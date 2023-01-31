const express = require('express');
const UserService = require('./../services/user.services');
const validatorHandler = require('../middleware/validatorHandler');
const {getUserSchema, createUserSchema} = require('./../schemas/user-schema')
const { models } = require('./../libs/sequelize')
const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
    try {
        const users = await service.find()
        console.log(users)
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const {id} = req.params;
        res.json({id})
    } catch (error) {
        next('error')
    }
})

router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newUser = await models.User.create(body)
            console.log(newUser)
            res.json(newUser)
        } catch (error) {
            next(error)            
        }
})

router.patch('/:id', async(req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        res.json({id})
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const {id} = req.params;
        res.json({id})
    } catch (error) {
        next(error)
    }
})

module.exports = router