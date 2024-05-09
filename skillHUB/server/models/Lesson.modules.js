//! import mongoose 

const mongoose =require("mongoose")
const Schema = mongoose.Schema;

const LessonSchema = new mongoose.Schema({

    title: { 
        type: String, 
        required:[true,"{PATH} required"] 
    },
    content: { 
        type: String, 
        required:[true,"{PATH} required"],
    },
    image: { 
        type: String, 
    },
    order: { 
        type: Number 
    },
    module: { 
        type: Schema.Types.ObjectId, //!import
        ref: 'Module' 
    }

},{ timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const Lesson = mongoose.model("Lesson", LessonSchema)

module.exports=Lesson //? ab3eth