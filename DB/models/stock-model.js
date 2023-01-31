const {Model, DataTypes, Sequelize} = require('sequelize');
const { USER_TABLE} = require('./user-model')
const moment = require('moment')


const STOCK_TABLE = 'stock';


const stockSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    InUse: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field: 'in_use',
    },
    onDeposit: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field: 'on_deposit',
    },
    tablewareType: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tableware_type'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field:'created_ad',
        defaultValue: Sequelize.NOW
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
};

class Stock extends Model {
    static associate(models) {
        this.belongsTo(models.User, {as: 'user'})
    };

    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Stock',
            tableName: STOCK_TABLE,
            timestamps: false
        }
    }
}

module.exports = { Stock, stockSchema, STOCK_TABLE}