const router = require('express').Router()
const revenueController = require('../controllers/revenueController')

router.get('/revenues', revenueController.getRevenue)

module.exports = router