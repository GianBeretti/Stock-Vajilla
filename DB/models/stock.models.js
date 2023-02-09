const {Model, DataTypes, Sequelize} = require('sequelize');
const {CUSTOMER_TABLE} = require('./customer.model')

const STOCK_TABLE = 'stocks';
const moment = require('moment')

const stockSchema = {
    id: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true, 
        type: DataTypes.INTEGER
    },
    customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CUSTOMER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.STRING,
        defaultValue: moment().format('L')  
    }
}


class Stock extends Model{ 
    static associate(models) {
        this.belongsTo(models.Customer, {as: 'customer'});
        this.belongsToMany(models.Product, {
            as: 'items',
            through: models.StockProduct,
            foreignKey: 'stockId',
            otherKey: 'productId'
        })
    }   
    static config(sequelize){
        return{ 
            sequelize,
            tableName: STOCK_TABLE,
            modelName: 'Stock',
            timestamps: false
        }
    }
}

module.exports = {Stock, stockSchema, STOCK_TABLE}