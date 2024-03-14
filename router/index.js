const express = require('express')
const router = express.Router()
const Controller = require('../controller/marketController')

router.get("/", Controller.indexPage)



module.exports = router