const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(methodOverride());

app.use('/api/auth', require('./routes/auth'))



const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))