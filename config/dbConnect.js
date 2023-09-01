const express =require('express')
const mongoose =require('mongoose')
const colors = require("colors")

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to Mongodb Database ${mongoose.connection.host}`.bgWhite.black);


    }catch(errors){
        console.log("Errors",errors)
    }
}

module.exports=connectDB


// mongoose.connect('mongodb://localhost:27017/local',
//   {
//     useNewUrlParser: true,
//     // useFindAndModify: true,
//     useUnifiedTopology: true
//   },(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("successful connect")
//     }

//   }
// );


