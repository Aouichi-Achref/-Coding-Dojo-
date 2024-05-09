//! import mongoose 

const mongoose =require("mongoose")
const Schema = mongoose.Schema;

const ModuleSchema = new mongoose.Schema({
    
    title: { 
        type: String, 
        required:[true,"{PATH} required"]
    },
    description: { 
        type: String 
    },
    order: { 
        type: Number,
        required:[true,"{PATH} required"]
    },
    course: { 
        type: Schema.Types.ObjectId,ref: 'Course' 
    }  
},{ timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const Modules = mongoose.model("Modules", ModuleSchema)

module.exports=Modules //? ab3eth