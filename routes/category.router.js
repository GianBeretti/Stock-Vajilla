const express = require('express');
const validatorHandler = require('./../middleware/validatorHandler');
const CategoryService = require('./../services/category.service');
const {getCategorySchema, createCategorySchema, updateCategorySchema} = require('./../schemas/categori.schema')

const router = express.Router();
const service = new CategoryService();


router.post('/',
validatorHandler(createCategorySchema, 'body'),
async (req, res, next) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.json(newCategory)
})

router.get('/', async(req, res, next) => {
    try {
        const categories = await service.find()
        res.json(categories)
    } catch (error) {
        next(error)
    }
})
router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async(req, res, next) => {
    try {
        const {id} = req.params
        const categories = await service.findOne(id)
        res.json(categories)
    } catch (error) {
        next(error)
    }
})


module.exports = router