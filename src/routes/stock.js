const StockController = require('../controllers/StockController')

module.exports = routes => {
    routes.get('/stocks', StockController.get)
    routes.get('/stocks/:stock_id', StockController.getById)
    routes.post('/stocks', StockController.save)
    routes.put('/stocks/:stock_id', StockController.edit)
}
