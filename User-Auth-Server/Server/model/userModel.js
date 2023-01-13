const mongoose = require('mongoose')
const schema = mongoose.Schema

const usermodel = new schema ({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
    
},{timestamp:true})

const user = mongoose.model('user',usermodel)
module.exports = user