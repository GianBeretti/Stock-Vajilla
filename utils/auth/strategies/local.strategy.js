const {Strategy} = require('passport-local');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const  UserService = require('./../../../services/user.services')

const service = new UserService();

const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},async (email, password, done) => {
    try {
    const user = await service.findbyEmail(email)
    if(!user){
        done(boom.unauthorized('Usuario no encontrado'), false)
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        done(boom.unauthorized('password incorrecto'), false)
    }
    delete user.dataValues.password
    done(null, user)
    } catch (error) {
        done(error, false)
    }
});


module.exports = localStrategy