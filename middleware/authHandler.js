const boom = require('@hapi/boom');
const {config} = require('./../config/config')

function chekApiKey (req, res, next) {
    const apiKey = req.headers['api'];
    if(apiKey === config.apiKey){
        next()
    }else {
        next(boom.unauthorized())
    }
}


module.exports = chekApiKey