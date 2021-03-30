const router = require('express').Router()
const user = require('../controllers/userController')

// router.get('/', user.test)
router.post('/', user.register)

module.exports = router