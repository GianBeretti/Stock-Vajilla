const {models} = require('./../libs/sequelize');



class CategoryService {
    constructor(){};

    
    async findOne(id) {
        const categories = await models.Category.findByPk(id, {
            include: ['products']
        })
        if(!categories){
            throw boom.notFound('Categoria no encontrada')
        }
        return categories
    }

    async create(data){
        const category = await models.Category.create(data);
        return category
    }
    async find(){
        const categories = await models.Category.findAll({
            include: ['products']
        });
        return categories
    }

}


module.exports = CategoryService