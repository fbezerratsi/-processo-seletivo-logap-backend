const ProviderController = require('../controllers/ProviderController')

module.exports = routes => {
    routes.get('/providers', ProviderController.get)
    routes.get('/providers/:provider_id', ProviderController.getById)
    routes.get('/provider-stock-product', ProviderController.getStockProduct)
    routes.post('/providers', ProviderController.save)
    routes.put('/providers/:provider_id', ProviderController.edit)
}
