const { Sequelize} = require('sequelize');
const {config} = require('../config/config');
const setupModels = require('../DB/models/index');

const options = {
    dialect: 'postgres',
    logging: config.isProd ? false : true
}
if(config.isProd){
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
}


const sequelize = new Sequelize(config.dbUrl, {
    dialect: 'postgres',
    logging: true
});

setupModels(sequelize);

module.exports = sequelize