const Tarefa1Controller = require('../controllers/Tarefa1Controller')

module.exports = routes => {
    routes.post('/tarefa1', Tarefa1Controller.findVowel)
}
