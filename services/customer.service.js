const {models} = require('./../libs/sequelize');
const bcrypt = require('bcrypt')


class CustomerService {
    constructor(){};


    async findOne(id){
        const customer = await models.Customer.findByPk(id)
        return customer
    };
    async find(){
        const customers = await models.Customer.findAll({
            include: ['user']
        });
        return customers
    }
    async create(data){
        const hash = await bcrypt.hash(data.user.password, 10)
        const newData = {
            ...data,
            user: {
                ...data.user,
                password: hash
            }
        }
        const newCustomer = await models.Customer.create(newData, {
            include: ['user']
        });
        delete newCustomer.dataValues.user.dataValues.password
        return newCustomer
    }
    async update(id, changes){
        const model = await models.Customer.findByPk(id);
        const rta = await model.update(changes);
        return rta
    };

    async delete(id){
        const user = models.Customer.destroy(id);
        return user.id
    }

}

module.exports = CustomerService