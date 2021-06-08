const ProductController = require('../controllers/ProductController')

module.exports = routes => {
    routes.get('/products', ProductController.get)
    routes.get('/products/update/:product_id', ProductController.getById)
    routes.post('/products', ProductController.save)
    routes.get('/products-zero', ProductController.getProductsMissingFromStock)
    routes.put('/products/update/:product_id', ProductController.edit)
}

