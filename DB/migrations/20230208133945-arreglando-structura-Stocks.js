const {USER_TABLE, userSchema} = require('./../models/users.model')
const {STOCK_TABLE, stockSchema} = require('./../models/stock.models')
const {CATEGORY_TABLE, categorySchema} = require('./../models/category.model')
const {CUSTOMER_TABLE, customerSchema} = require('./../models/customer.model')
const {PRODUCT_TABLE, productSchema} = require('./../models/products.model')
const {STOCK_PRODUCT_TABLE, stockProductSchema} = require('./../models/stock-products.model')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, customerSchema);
    await queryInterface.createTable(STOCK_TABLE, stockSchema);
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(STOCK_PRODUCT_TABLE, stockProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(STOCK_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(STOCK_PRODUCT_TABLE);
    await queryInterface.dropTable(USER_TABLE);

  }
};
