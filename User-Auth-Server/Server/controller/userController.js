
const { response } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require('../model/userModel')

const auth = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token,'secretvalue')

        req.user = decode
        next()
    }
    catch(error){
        if(error.name == "TokenExpiredError"){
            res.json({
                message:"Token Expired!"
            })
        }else{
        res.json({
            message:`auth Failed ${error}` 

        })
        }
    }
    }


const get = (req,res,next)=>{
    user.find()
    .then(response=>{
        res.json({response})
        console.log(response)
    })
    .catch(error=>{
        res.json({error})
        console.log({error})
    })
}

const register = (req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:`something went wrong ${err}`
            })
        }
    let User = new user({
        name:req.body.name,
        username:req.body.username,
        password:hashedPass
    })
    User.save()
    .then((User)=>{
        res.json({
            message:"user added sucessfully"
        })
    })
    .catch((error)=>{
        res.json({
            error:`${error}`
        })
    })
})
}

const add = (req,res,next)=>{
let User = new user({
    name:req.body.name,
    username:req.body.username,
    password:req.body.password,
})
User.save()
.then((response)=>{
    res.json({
        message:"user added sucessfully"
    })
})
.catch((error)=>{
    res.json({
        error:`${error}`
    })
})
}
const login = (req,res,next)=>{
    let username = req.body.username
    let password = req.body.password
    user.findOne({username:username})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token =jwt.sign({name:user.username},'secretvalue',{expiresIn:'30s'})
                    let refreshtoken =jwt.sign({name:user.username},'refresh',{expiresIn:'1hr'})
                    res.json({
                        message:'Login Sucessfull!',
                        JWT : token,
                        refreshtoken 
                    })
                }
                else{
                    res.json({
                        message:'Password does not matched!'
                    })
                }
            })
            
        }
        else{
            res.json({
                message:'No user Found'
            })
        }
    })
}
const num = (req,res,next)=>{
    
}

module.exports={get,add,register,login,auth}