//! import mongoose 

const mongoose =require("mongoose")

const AdminSchema = new mongoose.Schema({
    
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    access:{
        type:String,
        default:"admin"
    }

},{ timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const Admin = mongoose.model("Admin", AdminSchema)

module.exports=Admin //? ab3eth