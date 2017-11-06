'use strict'

const repository = require('../repositories/user')
const authService = require('../services/auth')

const md5 = require('md5')

exports.signup = async (req, res, next) => {
  try {
    await repository.signup({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password + global.APP_KEY),
      terms: req.body.terms
    })

    res.status(201).send({ status: true, message: 'Cadastro realizado com sucesso!' })
  } catch (e) {
    res.status(200).send({ status: false, message: 'E-mail já cadastrado!' })
  }
}

exports.login = async (req, res, next) => {
  let response = await repository.login({
    email: req.body.email,
    password: md5(req.body.password + global.APP_KEY)
  })

  if(!response) {
    res.status(200).send({ status: false, message: 'Usuário ou senha inválidos!' })
    return
  }

  let token = await authService.generateToken({ 
    id: response._id
  })

  res.status(200).send({ status: true, token: token, data: response })
}

exports.data = async (req, res, next) => {
  let data = await authService.decodeToken(req.headers['x-access-token'])

  let user = await repository.data(data)
  res.status(200).send(user)
}
