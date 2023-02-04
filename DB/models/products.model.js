const {Model, Sequelize, DataTypes} = require('sequelize');
const {CATEGORY_TABLE} = require('./category.model')

const PRODUCT_TABLE = 'products';

const productSchema = {
    id: {
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true, 
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    categoryId: {
        allowNull: false,
        field: 'category_id',
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Product extends Model {
    static associate(models){
        this.belongsTo(models.Category, {
            as: 'category',
        })
        // this.belongsToMany(models), {
        //     through: models.StockProduct,
        //     foreignKey: 'productId',
        //     otherKey: 'stockId'
        // }
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {Product, PRODUCT_TABLE, productSchema}