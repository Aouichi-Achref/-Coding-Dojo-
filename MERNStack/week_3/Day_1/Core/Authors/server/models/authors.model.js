//! import mongoose 

const mongoose =require("mongoose")

// ! the rules the entries need to follow 
const AuthorsSchema = new mongoose.Schema({
    author:{
        type: String,
        required:[true,"{PATH}is rquired"], //? fi wost validation lezim ou nn
        minLength:[3,"{PATH} must have at least 3 chars"] //? 9adeh min char fih
    }

},{ timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const Authors = mongoose.model("Authors", AuthorsSchema)

module.exports=Authors //? ab3eth