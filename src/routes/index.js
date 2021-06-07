const express = require('express')
const routes = express.Router()

const loadTarefa1Routes = require('./tarefa1')

const loadCategoryRoutes = require('./category')
const loadProviderRoutes = require('./provider')
const loadProductRoutes = require('./product')
const loadStockRoutes = require('./stock')

loadTarefa1Routes(routes)

loadCategoryRoutes(routes)
loadProviderRoutes(routes)
loadProductRoutes(routes)
loadStockRoutes(routes)

module.exports = routes