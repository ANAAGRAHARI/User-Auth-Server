const mongoose = require('mongoose')
const express = require('express')
const users = require('../controller/userController') 
const router = express.Router()
// const auth = require('../middelware/auth')

router.get('/userdata',users.auth,users.get)
router.post('/adduser',users.add)
router.post('/register',users.register)
router.post('/login',users.login)

module.exports=router

