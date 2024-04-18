const Joke=require("../models/joke.model")



module.exports={
    createJoke:(req,res)=>{
        Joke.create(req.body)
        .then(createdJoke=>res.status(201).json({data:createdJoke, message:'New joke Created with success!! ',ok:true}))
        .catch(err=>{console.log(err);res.status(400).json({ error: err.message })})
    },
    findAllJokes:(req,res)=>{
        Joke.find().then(allJokes=>  res.status(200).json({allJokes,message:'All jokes :' ,ok:true})
        ).catch(error=>res.status(500).json(error))
    },
    findOneJoke:(req,res)=>{
        Joke.findById(req.params.id)
        .then(oneJoke=>{
            if(!oneJoke){
                res.status(404).json({error:"joke Not Found"})
            }else{
                res.status(200).json(oneJoke)
            }
        })
        .catch(error=> res.status(500).json(error))
    },
    updateJoke:(req,res)=>{
        Joke.findByIdAndUpdate(req.params.id,req.body ,{new:true,runValidators:true})
        .then(updatedJoke=>res.status(201).json(updatedJoke))
        .catch(error=>res.status(400).json({content:error.errors.content.message,title:error.errors.title.message}))
    },
    deleteJoke:(req,res)=>{
        Joke.findByIdAndDelete(req.params.id)
        .then(deletedJoke=>res.status(200).json(deletedJoke))
        .catch(error=>res.stats(500).json(error))
        
    }
}