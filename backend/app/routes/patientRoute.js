const router = require('express').Router()
const patient = require('../controllers/patientController')


router.get('/patientInfo', patient.getPatient)


module.exports = router