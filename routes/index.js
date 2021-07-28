const router = require('express').Router()
const userRoutes = require('./userRoutes')
const revenueRoutes = require('./revenueRoutes')

router.use(userRoutes)
router.use(revenueRoutes)

module.exports = router