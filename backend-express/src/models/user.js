'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  terms: {
    type: Boolean,
    required: true
  },
  role: [{
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }]
})

module.exports = mongoose.model('User', schema)
