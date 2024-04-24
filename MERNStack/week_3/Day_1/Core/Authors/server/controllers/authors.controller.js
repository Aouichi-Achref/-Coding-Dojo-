const Authors =require("../models/authors.model")

module.exports = {

      //? =========== READ ALL ==========
    findAllAuthors: (req, res) => {
        Authors.find()
            .then((AllAuthors) => {
            console.log(AllAuthors);
            res.status(200).json(AllAuthors);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneAuthors : (req, res) => {
        Authors.findOne({ _id: req.params.id })
            .then(oneSingleAuthor => {
                res.status(200).json(oneSingleAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    createAuthors : (req, res) => {
        Authors.create(req.body)
        .then((CreatedAuthors) => {
                    console.log(CreatedAuthors)
                    res.status(200).json(CreatedAuthors)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateAuthors : (req, res) => {
        Authors.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthors => {
                    res.status(200).json(updatedAuthors);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteAuthors : (req, res) => {
            Authors.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            }
    

// ! old ways "it works but i had problem with validation" we will rewark this
    // //? ========= create one ===========
    // createAuthors:(req,res)=>{
    //     Authors.create(req.body)
    //     .then(createdAuthors=>res.status(201).json({data:createdAuthors,
    //     message:'New Authors Created with success!! you see its easy ',ok:true}))
    //     .catch(err=>{console.log(err);
    //     res.status(400).json({ error: err.message })})
    // },
    // // ? ========= view all =========
    // findAllAuthors:(req,res)=>{
    //     Authors.find()
    //     .then(allAuthorss=> res.status(200).json({allAuthorss,message:'All Authorss :',ok:true})
    //     ).catch(error=>res.status(500).json(error))
    // },
    // // ? ========= view one =======
    // findOneAuthors:(req,res)=>{
    //     Authors.findById(req.params.id)
    //     .then(oneAuthors=>{
    //         if(!oneAuthors){
    //             res.status(404).json({error:"Authors Not Found"})
    //         }else{
    //             res.status(200).json(oneAuthors)
    //         }
    //     })
    //     .catch(error=> res.status(500).json(error))
    // },
    // // ? ========== update one =========
    // updateAuthors:(req,res)=>{
    //     Authors.findByIdAndUpdate(req.params.id,req.body ,{new:true,runValidators:true})
    //     .then(updatedAuthors=>res.status(201).json(updatedAuthors))
    //     .catch(error=>res.status(400).json({content:error.errors.content.message,title:error.errors.title.message}))
    // },
    // // ? ========== delete one ========= 
    // deleteAuthors:(req,res)=>{
    //     Authors.findByIdAndDelete(req.params.id)
    //     .then(deletedAuthors=>res.status(200).json(deletedAuthors))
    //     .catch(error=>res.stats(500).json(error))
    // }

}