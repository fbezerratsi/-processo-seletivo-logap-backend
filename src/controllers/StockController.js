
const Stock = require('../models/Stock')

module.exports =  {

    async getById(req, res) {

        const stock_id  = req.params.stock_id
        
        await Stock.findByPk(stock_id, {
            include: { association: 'product' }
        })
            .then(stock => res.json(stock))
            .catch(err => res.status(500).send(err))

    },
    async get(req, res) {
        
        await Stock.findAll({
            include: ['product']
        })
            .then(stocks => res.json(stocks))
            .catch(err => res.status(500).send(err))

    },
    async edit(req, res) {
        const stock_id  = req.params.stock_id

        const stockBody = req.body

        const stock =  await Stock.findByPk(stock_id)
        
        await stock.update(stockBody, {
            include: ['product']
        })
            .then(product => res.status(201).json(product))
            .catch(erro => res.status(500).json(erro))
    },
    async save(req, res) {

        const stock = { ...req.body }

        await Stock.create(stock, {
            include: ['product']
        })
            .then(stock => res.status(201).json(stock))
            .catch(erro => res.status(500).json(erro))

    }
}