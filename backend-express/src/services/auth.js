'use strict'

const jwt = require('jsonwebtoken')

exports.generateToken = async (data) => {
  return jwt.sign(data, global.APP_KEY, { expiresIn: '1d' })
}

exports.decodeToken = async (token) => {
  let data = await jwt.verify(token, global.APP_KEY)
  return data
}

exports.authorize = function (req, res, next) {
  let token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({
      message: 'Acesso Restrito'
    });
  } else {
    jwt.verify(token, global.APP_KEY, function (error, decoded) {
      if (error) {
        res.status(422).json({
          message: 'Token Inválido'
        });
      } else {
        next()
      }
    })
  }
}
