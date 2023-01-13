// import  express from ' express'
// import  mongoose from ' mongoose'
// import  morgan from ' morgan'
// import  bodyParser from ' bodyParser'
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser =require('body-parser')
const studentrouter = require('./routes/dataRouter')
const mongodb ='mongodb://127.0.0.1:27017/studentdb'

mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true})

const db= mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("Database docked")
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/upload',express.static('uploads'))



const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.use('/api/students',studentrouter)
