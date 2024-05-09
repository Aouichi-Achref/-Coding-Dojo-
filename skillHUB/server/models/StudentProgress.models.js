//! import mongoose 

const mongoose =require("mongoose")
const Schema = mongoose.Schema;

const StudentProgressSchema = new mongoose.Schema({

    student: { 
        type: Schema.Types.ObjectId, 
        ref: 'Student' 
    },
    course:[{ 
        type: Schema.Types.ObjectId, 
        ref: 'Course' 
    }],
    lastModule: { 
        type: Schema.Types.ObjectId, 
        ref: 'Module' 
    },
    lastLesson: { 
        type: Schema.Types.ObjectId, 
        ref: 'Lesson' 
    },
    progress: { 
        type: Number,
        default: 0 
    }
},{ timestamps: true })//? ( created + updated ) at

//! from just a rule to ""cahier des charges"" a model 
const StudentProgress = mongoose.model("StudentProgress", StudentProgressSchema)

module.exports=StudentProgress //? ab3eth