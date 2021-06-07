require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //logging: false,
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
}