const {Sequelize, Model, DataTypes} = require('sequelize')
const {PRODUCT_TABLE, productSchema} = require('../models/products.model')


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'category_id', productSchema.categoryId)
  },

  async down (queryInterface, Sequelize) {
  }
};
