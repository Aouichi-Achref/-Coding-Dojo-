//! import mongoose 

const mongoose =require("mongoose")
const {isEmail} = require("validator")
const bcrypt = require('bcrypt')


const StudentSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, "{PATH} is rquired"],
        minLength:[3,"{PATH} must have at least 3 chars"]
    },
    lastName:{ 
        type: String,
        required:[ true,"{PATH} is rquired"],
        minLength:[3,"{PATH} must have at least 3 chars"]
    },
    email: { 
        type: String,
        required:[ true,"{PATH} is rquired"],
        validate:[isEmail,"{Path} not valid"],
        validate: [value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),"{Path} not valid"],
        unique: [true,"{PATH} already used"] 
    },
    password: { 
        type: String,
        required:[true,"{PATH} required"],
        minLength:[8,"{PATH} must have at least 10 chars"]
    },
    // ! rapelle lil image kifeh 
    image: { 
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    degree: {
        type: String,
    },
    experience: {
        type: String,
    },
    educationLevel: {
        type: Number,
        default:0
    },
    access:{
        type:String,
        default:"student"
    }
},{ timestamps: true })//? ( created + updated ) at

StudentSchema.virtual('Confirmpassword').get(() => this._ConfirmPassword)
.set((value) => (this._ConfirmPassword = value));




//! from just a rule to ""cahier des charges"" a model 
const Student = mongoose.model("Student", StudentSchema)

module.exports=Student //? ab3eth