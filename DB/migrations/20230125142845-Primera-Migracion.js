const {USER_TABLE, userSchema} = require('./../models/user-model')
const {STOCK_TABLE, stockSchema} = require('./../models/stock-model')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(STOCK_TABLE, stockSchema)
  },

  async down (queryInterface, Sequelize) {

  }
};
