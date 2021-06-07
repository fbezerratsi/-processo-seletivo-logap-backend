const Product = require('../models/Product')

module.exports =  {

    async getById(req, res) {

        const product_id  = req.params.product_id
        
        await Product.findByPk(product_id, {
            include: ['category', 'provider']
        })
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))

    },
    async getProductsMissingFromStock(req, res) {
        await Product.findAll({
            attributes: ['product_id', 'name', 'price'],
            include: [
                {
                    association: 'category',
                    attributes: ['name'],
                },
                {
                    association: 'provider',
                    attributes: ['name'],
                },
                {
                    association: 'stocks',
                    attributes: ['amount'],
                    where: { amount: 0 }
                }
            ]
        })
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))
    },
    async get(req, res) {
        
        await Product.findAll({
            include: ['category', 'provider']
        })
            .then(products => res.json(products))
            .catch(err => res.status(500).send(err))

    },
    async edit(req, res) {
        const product_id  = req.params.product_id

        const productBody = req.body

        const product =  await Product.findByPk(product_id)
        res.json(product)
        await product.update(productBody, {
            include: ['category', 'provider']
        })
            .then(product => res.status(201).json(product))
            .catch(erro => res.status(500).json(erro))
    },
    async save(req, res) {

        const product = { ...req.body }
        
        

        await Product.create(product, {
            include: ['category', 'provider']
        })
            .then(product => res.status(201).json(product))
            .catch(erro => res.status(500).json(erro))

    }
}