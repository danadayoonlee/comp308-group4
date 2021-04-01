const router = require('express').Router()
const user = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/', user.register)

router.post('/login', user.login)

router.get('/logout', user.logout)

router.get('/userinfo', auth, user.getUserInfo)


module.exports = router