const express = require('express')
const config = require('config')


const knex = require('./knex/knex.js');

const app = express()

//app.use('/api/auth')

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))