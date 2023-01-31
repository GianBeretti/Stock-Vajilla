const {userSchema, User} = require('./user-model');
const {stockSchema, Stock} = require('./stock-model');


function setupModels(sequelize){ 
    User.init(userSchema, User.config(sequelize));
    Stock.init(stockSchema, Stock.config(sequelize));


    User.associate(sequelize.models);
    Stock.associate(sequelize.models);
};

module.exports = setupModels
