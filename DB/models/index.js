const {userSchema, User} = require('./users.model');
const {StockProduct, STOCK_PRODUCT_TABLE, stockProductSchema} = require('./stock-products.model');
const {stockSchema, Stock} = require('./stock.models');
const {productSchema, Product} = require('./products.model');
const {categorySchema, Category} = require('./category.model');
const {customerSchema, Customer} = require('./customer.model');



function setupModels(sequelize){ 
    User.init(userSchema, User.config(sequelize));
    Stock.init(stockSchema, Stock.config(sequelize));
    StockProduct.init(stockProductSchema, StockProduct.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    Category.init(categorySchema, Category.config(sequelize));
    Customer.init(customerSchema, Customer.config(sequelize));



    User.associate(sequelize.models);
    Stock.associate(sequelize.models);
    StockProduct.associate(sequelize.models);
    Product.associate(sequelize.models);
    Category.associate(sequelize.models);
    Customer.associate(sequelize.models);

};

module.exports = setupModels
