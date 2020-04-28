const express = require('express')
const configPort = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(methodOverride());

app.use('/api/auth', require('./routes/auth'))


//*************
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: '58eaca62128aa1cb919ad348d3e00ef71a9be0e0e6438ee65430f9d3b3c3ce0c'
  },
  baseURL: 'http://localhost:3000',
  clientID: 'M0sCJ8jOUms6hYKWczHrsfZBDoKb6aw0',
  issuerBaseURL: 'https://dev-ew45cv8o.eu.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.openid.user));
});


//************ */

const PORT = configPort.get('port') || 3000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))