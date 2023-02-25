const bcrypt = require('bcrypt');
const {models} = require('./../libs/sequelize');
const boom = require('@hapi/boom');


class UserService {
    constructor(){};


    async find(){
        const users = await models.User.findAll();
        return users
    }
    async findbyEmail(email){
        const users = await models.User.findOne({
            where: {email}
        });
        return users
    }

    async create(data){
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = await models.User.create({
            ...data,
            password: hash
        });
        delete newUser.dataValues.password
        return newUser
    };

    async findOne(id){
        const user = await models.User.findByPk(id, {
            include: ['customer']
        });
        if(!user){
            throw boom.notFound('Usuario no encontrado')
        }
        return user
    }

    async update(id, changes) {
        const user = await this.findOne(id)
        const rta = await user.update(changes);
        return rta
    };

    async delete(id) {
        const user = await this.findOne(id)
        await user.destroy()
        return {id}
    }

}

module.exports = UserService