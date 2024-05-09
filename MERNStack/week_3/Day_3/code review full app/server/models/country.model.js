//! import mongoose 

const mongoose =require("mongoose")

const CountrySchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,"{PATH} is rquired"], //? fi wost validation lezim ou nn
        minLength:[3,"{PATH} must have at least 3 chars"] //? 9adeh min char fih
    },
    flag:{
        type: String,
        required:[true,"{PATH} is rquired"], //? fi wost validation lezim ou nn
        minLength:[3,"{PATH} must have at least 8 chars"] //? 9adeh min char fih
    },
    independent:{
        type:Boolean,
        required:[true,"{PATH} is rquired"], //? fi wost validation lezim ou nn
    }
},{timestamps:true})



//! from just a rule to ""cahier des charges"" a model 
const Country = mongoose.model("country", CountrySchema)

module.exports=Country //? ab3eth