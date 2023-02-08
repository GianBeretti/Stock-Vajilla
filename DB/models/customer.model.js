const {Sequelize, Model, DataTypes} = require('sequelize')
const {USER_TABLE} = require('./users.model')


const CUSTOMER_TABLE = 'customers';


const customerSchema = {
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
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name',
    },
    phone: {
        allowNull: true,
        type: DataTypes.STRING
    },
    userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}


class Customer extends Model {
    static associate(models){
        this.belongsTo(models.User, {as: 'user'})

        this.hasMany(models.Stock),{
            as: 'stock',
            foreignKey: 'customerId'
        }
    }
    
    static config(sequelize){
        return{
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false,
        }
    }
}

module.exports = {Customer, CUSTOMER_TABLE, customerSchema}