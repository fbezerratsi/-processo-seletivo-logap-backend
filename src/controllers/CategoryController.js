const Category = require('../models/Category')
const { associate } = require('../models/Product')


module.exports =  {

    async getById(req, res) {

        const category_id  = req.params.category_id
        
        await Category.findByPk(category_id)
            .then(categories => res.json(categories))
            .catch(err => res.status(500).send(err))

    },
    async getCategoryStock(req, res) {
        await Category.findAll({
            include: [
                {
                    association: 'products',
                    attributes: ['name'],
                    required: true,
                    include: [{
                        association: 'stocks',
                        attributes: ['amount'],
                        required: true
                    }]
                }
            ]
        })
            .then(categories => res.json(categories))
            .catch(err => res.status(500).send(err))
    },
    async get(req, res) {
        
        await Category.findAll({
            /* include: [
                {
                    association: 'products',
                    attributes: ['name'],
                    include: [{
                        association: 'provider',
                        attributes: ['name']
                    }]
                }
            ] */
        })
            .then(categories => res.json(categories))
            .catch(err => res.status(500).send(err))
            
    },
    async edit(req, res) {

        const category_id  = req.params.category_id

        const categoryBody = req.body

        const category =  await Category.findByPk(category_id)
        
        await category.update(categoryBody)
            .then(category => res.status(201).json(category))
            .catch(erro => res.status(500).json(erro))

    },
    async save(req, res) {

        const category = { ...req.body }
        

        await Category.create(category)
            .then(categ => res.status(201).json(categ))
            .catch(erro => res.status(500).json(erro))

    }
}