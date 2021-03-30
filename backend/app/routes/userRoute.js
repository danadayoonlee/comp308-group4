const router = require('express').Router()
const user = require('../controllers/userController')

// router.get('/', user.test)
router.post('/', user.register)

router.post('/login', user.login)

router.get('/logout', user.logout)

module.exports = router