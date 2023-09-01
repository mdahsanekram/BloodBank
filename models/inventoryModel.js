const mongoose = require("mongoose");


const inventorySchema=new mongoose.Schema({
    inventoryType:{
        type:String,
        require:[true,"inventory type is require"],
        enum:["in","out"]
    },
    bloodGroup:{
        type:String,
        require:[true,"blood group type is require"],
        enum:["O+","O-","AB+","AB-","A+","A-","B+","B-"]
    },
    quantity:{
        type:Number,
        require:[true,"blood quantity is require"],
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organisation",
        require:[true,"organisation is require"],
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'organisation',
        require:function(){
            return this.inventoryType==='out'
        }
    },
    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:function(){
            return this.inventoryType==='in'
        }
    }

},{timestamps:true})

module.exports= mongoose.model('inventory',inventorySchema)