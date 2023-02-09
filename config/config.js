require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    dbPort: process.env.DB_PORT,
    dUsser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUrl: process.env.DB_URL,
    isProd: process.env.NODE_ENV === 'production',
    apiKey: process.env.API_KEY
}



module.exports = {config};

