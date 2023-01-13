
const students = require('../models/dataModule')

const get = (req,res,next)=>{
    students.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:"data was not recived"
        })
    })
}

const store = (req,res,next)=>{
    let student =new students({
        name:req.body.name,
        rollno:req.body.rollno,
        age:req.body.age
    })
    if(req.file){
        student.avatar = req.file.path
    }
    student.save()
    .then(
        res.json({
            message:"student details added"
        })
    )
    .catch(
        res.json({
            message:"someting went wrong"
        }))
}


module.exports={get ,store}