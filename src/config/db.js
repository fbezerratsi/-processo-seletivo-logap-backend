const config = require('./sequelizefile')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config)



const Category = require('../models/Category')
Category.init(sequelize)
const Provider = require('../models/Provider')
Provider.init(sequelize)
const Product = require('../models/Product')
Product.init(sequelize)
const Stock = require('../models/Stock')
Stock.init(sequelize)


Category.associate(sequelize.models)
Provider.associate(sequelize.models)
Product.associate(sequelize.models)
Stock.associate(sequelize.models)

module.exports = sequelize