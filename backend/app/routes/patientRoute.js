const router = require('express').Router()
const patient = require('../controllers/patientController')
const auth = require('../middleware/auth')

module.exports = router