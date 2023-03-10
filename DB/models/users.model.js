const {Sequelize, Model, DataTypes} = require('sequelize')
const moment = require('moment')

const USER_TABLE = 'users';

const userSchema = {
    id: {
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false, 
        type: DataTypes.STRING
    },
    role: {
        allowNull: false, 
        type: DataTypes.STRING,
        defaultValue: 'customer'
    },
    createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.STRING,
        defaultValue: moment().format('L')  
    }
}


class User extends Model {
    static associate(models) {
        this.hasOne(models.Customer, {
            as: 'customer',
            foreignKey: 'userId'
        })
    }

    static config(sequelize){ 
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = {User, USER_TABLE, userSchema};
