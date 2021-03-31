const router = require('express').Router()
const nurse = require('../controllers/nurseController')
const auth = require('../middleware/auth')
const authNurse = require('../middleware/authNurse')

router.get('/patients', auth, authNurse, nurse.getPatients)

router.get('/nurseInfo', auth, authNurse, nurse.getNurse)


module.exports = router