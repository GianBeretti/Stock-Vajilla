const express = require('express');
const UserService = require('./../services/user.services');
const validatorHandler = require('../middleware/validatorHandler');
const {getUserSchema, createUserSchema, updateUserSchema} = require('./../schemas/user-schema');


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
        const rta = await service.findOne(id)
        res.json(rta)
    } catch (error) {
        next('error')
    }
})

router.post('/',
    validatorHandler(createUserSchema, 'body'),
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

router.patch('/:id',
    validatorHandler(updateUserSchema, 'body'),
    async(req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const user =  await service.update(id, body)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id',
    validatorHandler(getUserSchema, 'params'),
    async(req, res, next) => {
    try {
        const {id} = req.params;
        await service.delete(id)
        res.json({id})
    } catch (error) {
        next(error)
    }
})

module.exports = router