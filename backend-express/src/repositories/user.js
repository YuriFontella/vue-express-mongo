'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.signup = async (data) => {
  let user = new User(data)
  await user.save()
}

exports.login = async (data) => {
  let response = await User.findOne(data, 'name email')
  return response
}

exports.data = async (data) => {
  let user = await User.findById(data.id, 'name email')
  return user
}
