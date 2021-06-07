const CategoryController = require('../controllers/CategoryController')

module.exports = routes => {
    routes.get('/categories', CategoryController.get)
    routes.get('/categories-stock', CategoryController.getCategoryStock)
    routes.get('/categories/:category_id', CategoryController.getById)
    routes.post('/categories', CategoryController.save)
    routes.put('/categories/:category_id', CategoryController.edit)
}
