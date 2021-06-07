const Provider = require('../models/Provider')

module.exports =  {

    async getById(req, res) {

        const provider_id  = req.params.provider_id
        
        await Provider.findByPk(provider_id)
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))

    },
    async getStockProduct(req, res) {
        await Provider.findAll({
            include: [
                {
                    association: 'products',
                    attributes: ['name'],
                    include: [{
                        association: 'stocks',
                        attributes: ['amount'],
                        where: { amount: 0 }
                    }]
                }
            ],
        })
            .then(providers => res.json(providers))
            .catch(err => res.status(500).send(err))
    },
    async get(req, res) {
        
        await Provider.findAll()
            .then(providers => res.json(providers))
            .catch(err => res.status(500).send(err))
    },
    async edit(req, res) {
        const provider_id  = req.params.provider_id

        const providerBody = req.body

        const provider =  await Provider.findByPk(provider_id)
        
        await provider.update(providerBody)
            .then(provider => res.status(201).json(provider))
            .catch(erro => res.status(500).json(erro))
    },
    async save(req, res) {

        const provider = { ...req.body }
        
        

        await Provider.create(provider)
            .then(provider => res.status(201).json(provider))
            .catch(erro => res.status(500).json(erro))

    }
}