const dotenv = require('dotenv')
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
dotenv.config()
require('./config/db')

app.use(express.json())
app.use(cors())
app.use(routes)
app.listen('3000', () => {
    console.log('Executando...')
})