const {Sequelize, Model, DataTypes} = require('sequelize');
const moment = require('moment')


const CATEGORY_TABLE = 'categories';

const categorySchema = {
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
    createdAt: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'created_at',
        defaultValue: moment().format('L')  
    }
}


class Category extends Model {
    static associate(models) {
        this.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}


module.exports = {categorySchema, Category, CATEGORY_TABLE}