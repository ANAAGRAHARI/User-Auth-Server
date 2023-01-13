const mongoose =require('mongoose')

const mongodb_url= 'mongodb://127.0.0.1:27017/newuser'
mongoose.connect(mongodb_url)
// {useNewUrlParser:true, useUnifiedTopology:true}
const db = mongoose.connection;

db.on('error',(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log("DB is connected")
})


