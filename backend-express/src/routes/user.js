'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/users')
const authService = require('../services/auth');

router.post('/signup', controller.signup)
router.post('/login', controller.login)

router.get('/data', authService.authorize, controller.data)

module.exports = router
