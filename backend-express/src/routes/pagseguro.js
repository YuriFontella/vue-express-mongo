'use strict'

const express = require('express')
const router = express.Router()

const parser = require('xml2json')

const pagseguro = require('../pagseguro')

router.post('/checkout', (req, res, next) => {
  pagseguro.addItem({
    id: 1,
    description: 'Descrição do primeiro produto',
    amount: '15.00',
    quantity: 1
  })

  pagseguro.checkout(function (success, response) {
    if (success) {
      res.status(200).send(parser.toJson(response))
    }

    console.log(response)
  })
})

module.exports = router
