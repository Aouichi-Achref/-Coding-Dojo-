//! import mongoose 

const mongoose =require("mongoose")
const {isEmail} = require("validator")
const bcrypt = require('bcrypt')

const InstractorSchema = new mongoose.Schema({

    firstName: { 
        type: String,
        required: [true, "{PATH} is rquired"],
        minLength:[3,"{PATH} must have at least 3 chars"]
    },
    lastName: { 
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
        minLength:[8,"{PATH} must have at least 8 chars"]
    },
    gitHUb: { 
        type: String,
        required: [true,"{PATH} required"],        
        unique: [true,"{PATH} already used"]
    },
    degree: {
        type: String,
        required:[true,"{PATH} required"],
    },
    experience: {
        type: String,
        required:[true,"{PATH} required"],
    },
    // ! rapelle lil image kifeh 
    image: { 
        type: String,
    },
    dateOfBirth: { 
        type: Date 
    },
    bio: { 
        type: String 
    },
    access:{
        type:String,
        default:"instractor"
    }   
},{ timestamps: true })//? ( created + updated ) at

InstractorSchema.virtual('Confirmpassword')
.get(() => this._ConfirmPassword)
.set((value) => (this._ConfirmPassword = value));

//! from just a rule to ""cahier des charges"" a model 
const Instractor = mongoose.model("Instracor", InstractorSchema)
module.exports=Instractor //? ab3eth