const router = require('express').Router()

router.use('/api', require('./personRoutes.js'))

module.exports = router
