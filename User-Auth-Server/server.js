//import required files
const mongoose =require('mongoose')
const express = require('express')
const dotenv =require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
require('./Server/database/database')
const user = require('./Server/routes/userRouter')
//--//

//Port configration 
dotenv.config({path:'config.env'})
const port = process.env.PORT || 3000

//logs req from uesr
app.use(morgan('dev'))

//parse request to body-parser
// app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

//Server is listening on defined port 
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
//route middelware 
app.use('/api/user',user)
//--//


