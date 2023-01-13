const express = require('express')
const router = express.Router()
const controller = require('../controller/dataController')
const upload = require('../Middelware/upload')

router.get('/',controller.get)
router.post('/store',upload.array('avatar[]'),controller.store)

module.exports = router  