const {Model, DataTypes, Sequelize} = require('sequelize');
const moment = require('moment')

const USER_TABLE = 'users'

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
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.STRING ,
        field: 'created_at',
        defaultValue: moment().format('l')
    },

}

class User extends Model {

    static associate(models){
        this.hasOne(models.Stock,{
            as: 'stock',
            foreignKey: 'UserId'
        });

    }

    static config(sequelize) {
        return{ 
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { User, userSchema, USER_TABLE}