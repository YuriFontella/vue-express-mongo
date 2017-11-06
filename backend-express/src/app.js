'use strict'

// Constants
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')

const app = express()

// Connection mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.connection, {
  useMongoClient: true
})

// Use
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: false }))

// Cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

// Models
require('./models/user')

// Routes
const index = require('./routes/index')
const user = require('./routes/user')
const pagseguro = require('./routes/pagseguro')

// Define routes
app.use('/', index)
app.use('/users', user)
app.use('/pagseguro', pagseguro)

// Export
module.exports = app
