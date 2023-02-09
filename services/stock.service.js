const {models} = require('../libs/sequelize');


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

    async create(data){
      const newStock = await models.Stock.create(data);
      return newStock
    }

    async addItem(data){
      const newProduct = await models.StockProduct.create(data);
      return newProduct
    }
}



module.exports = StockService