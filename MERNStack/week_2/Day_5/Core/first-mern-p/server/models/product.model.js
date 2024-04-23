//! import mongoose 

const mongoose =require("mongoose")

// ! the rules the entries need to follow 
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"{PATH}is rquired"], //? fi wost validation lezim ou nn
        minLength:[3,"{PATH} must have at least 3 chars"] //? 9adeh min char fih
    },
    price:{
        type:Number,
        required:[true,"{PATH}is rquired"],
        min : [0,"{path} must be real "] //? minimum 
    },
    description:{
        type:String,
        required:[true,"{PATH}is rquired"],
        minLength:[20,"{PATH} must have at least 3 chars"]
    }

}, { timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const Product = mongoose.model("Product", ProductSchema)

module.exports=Product //? ab3eth
