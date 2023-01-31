const bcrypt = require('bcrypt');
const {models} = require('./../libs/sequelize');


class UserService {
    constructor(){};



    async create(data){
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = await models.User.create({
            ...data,
            password: hash
        });
        delete newUser.dataValues.password
        return newUser
    }

}

module.exports = UserService