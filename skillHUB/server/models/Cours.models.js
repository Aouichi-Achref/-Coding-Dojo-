//! import mongoose 

const mongoose =require("mongoose")
const Schema = mongoose.Schema;

const CoursSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "{PATH} is rquired"],
        minLength:[3,"{PATH} must have at least 3 chars"]    
    },
    description: {
        type: String,
        required: [true, "{PATH} is rquired"],
        minLength:[5,"{PATH} must have at least 5 chars"]
    },
    benefits: {
        type: String ,
        required: [true, "{PATH} is rquired"],
        minLength:[5,"{PATH} must have at least 5 chars"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is rquired"],
        min:[0,"{PATH} can not be negative"]
    },
    instructor: {
        type: Schema.Types.ObjectId, ref: 'Instructor' 
    }
    
},{ timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const Cours = mongoose.model("Cours", CoursSchema)

module.exports=Cours //? ab3eth