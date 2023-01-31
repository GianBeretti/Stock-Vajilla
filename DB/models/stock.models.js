const {Model, DataTypes, Sequelize} = require('sequelize');
const {CUSTOMER_TABLE} = require('./customer.model')
const STOCK_TABLE = 'stocks';

const stockSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        aoutoIncrement: true,
        type: DataTypes.INTEGER
    },
    customerId: {
        allowNull: false,
        field: 'customer_id',
        type: DataTypes.INTEGER,
        references: {
            model: CUSTOMER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}


class Stock extends Model{ 
    static associate(models) {
        this.belongsTo(models.Customer, {as: 'customer'})
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