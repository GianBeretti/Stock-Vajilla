const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom')



class StockService {
    constructor(){}

    async findOne(id) {
        const order = await models.Stock.findByPk(id, {
          include: [
            {
              association: 'customer',
              include: ['user'],
            },
            'items'
          ],
        });
        return order;
      }

      async create(data) {
        // Accedemos al modelo Customer y usando where encadenamos hacia user
        const customer = await models.Customer.findOne({
          where: {
            '$user.id$': data.userId
          },
          include: ['user']
        });
        // Validamos que exista el customer
        if (!customer) {
          throw boom.notFound('Customer not found');
        }
        // Creamos un objeto con el customerId obtenido de la consulta
        const dataOrder = {
          customerId: customer.id
        };
        const newOrder = await models.Stock.create(dataOrder);
        return newOrder;
      }

    async addItem(data){
      const newProduct = await models.StockProduct.create(data);
      return newProduct
    }
}



module.exports = StockService