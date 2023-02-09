const {Sequelize, Model, DataTypes} = require('sequelize');
const moment = require('moment')
const {STOCK_TABLE} = require('./stock.models');
const {PRODUCT_TABLE} = require('./products.model');

const STOCK_PRODUCT_TABLE = 'stocks_products';

const stockProductSchema = {
    id: {
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: moment().format('L')  
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    stockId: {
        field: 'stock_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: STOCK_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}


class StockProduct extends Model {
    static associate(models){
        
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: STOCK_PRODUCT_TABLE,
            modelName: 'StockProduct',
            timestamps: false
        }
    }
}


module.exports = {stockProductSchema, STOCK_PRODUCT_TABLE, StockProduct}