const {models} = require('./../libs/sequelize');
const boom = require('@hapi/boom')

class ProductService {
    constructor(){};

    async find(query){
        const options = {
            include: ['category']
        }
        const {limit, offset} = query
        if(limit && offset) {
            options.limit = limit;
            options.offset = offset
        }
        const produtcs = await models.Product.findAll(options);
        return produtcs
    }

    async create(data){
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    
    async findOne(id){
        const product = await models.Product.findByPk(id);
        if(!product){
            throw boom.notFound('producto no encontrado');
        }
        return product
    }
    async update(id, changes){
        const product = await this.findOne(id);
        const rta = await product.update(changes);
        return changes;
    }
    async delete(id){
        const product = await this.findOne(id);
        product.destroy();
        return {id}
    }
}


module.exports = ProductService
