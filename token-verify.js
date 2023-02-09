const jwt = require('jsonwebtoken');

const secret = 'example';

const jwtConfig = {
    expiresIn: '1d'
};


const payload = {
    sub: 1,
    role: 'customer'
};

const token = jwt.sign(payload, secret, jwtConfig)

const verify = jwt.verify(token, secret)


console.log(verify)