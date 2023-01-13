const mongoose = require('mongoose');

const schema = mongoose.Schema

const studentSchema= new schema({
    name:{
        type:String
    },
    rollno:{
        type:Number
    },
    age:{
        type:Number
    },
    avatar:{
        type:String
    }
},{timestapmp:true})

const students = mongoose.model('students',studentSchema)

module.exports = students;