const Country = require("../models/country.model");


module.exports = {
  //? =========== READ ALL ==========
    findAllCountry: (req, res) => {
    Country.find()
        .then((AllCountry) => {
        console.log(AllCountry);
        res.status(200).json(AllCountry);
        })
        .catch((err) => {
        console.log(err);
        res.status(400).json();
        });
    },
            //? =========== READ ONE ==========
    findOneCountry : (req, res) => {
        Country.findOne({ _id: req.params.id })
            .then(oneSingleCounty => {
                res.status(200).json(oneSingleCounty);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
     //? =========== CREATE ==========
    createCountry : (req, res) => {
        Country.create(req.body)
        .then((CreatedCountry) => {
                    console.log(CreatedCountry)
                    res.status(200).json(CreatedCountry)
                }).catch((err) => {
                res.status(400).json(err)
            })
        },
    //? =========== UPDATE ==========
    updateCountry : (req, res) => {
        Country.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedCountry => {
                    res.status(200).json(updatedCountry);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        },
    //? =========== DELETE ==========
    deleteCountry : (req, res) => {
        Country.deleteOne({ _id: req.params.id })
        .then(result => {
                    res.status(200).json(result);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        }

  // ! old ways
  // //? ========= create one ===========
  // createCountry:(req,res)=>{
  //     Country.create(req.body)
  //     .then(createdCountry=>res.status(201).json({data:createdCountry,
  //                                                 message:'New Country Created with success!! you see its easy ',ok:true}))
  //     .catch(err=>{console.log(err);
  //     res.status(400).json({ error: err.message })})
  // },
  // // ? ========= view all =========
  // findAllCountry:(req,res)=>{
  //     Country.find()
  //     .then(allCountrys=> res.status(200).json({allCountrys,message:'All Countrys :',ok:true})
  //     ).catch(error=>res.status(500).json(error))
  // },
  // // ? ========= view one =======
  // findOneCountry:(req,res)=>{
  //     Country.findById(req.params.id)
  //     .then(oneCountry=>{
  //         if(!oneCountry){
  //             res.status(404).json({error:"Country Not Found"})
  //         }else{
  //             res.status(200).json(oneCountry)
  //         }
  //     })
  //     .catch(error=> res.status(500).json(error))
  // },
  // // ? ========== update one =========
  // updateCountry:(req,res)=>{
  //     Country.findByIdAndUpdate(req.params.id,req.body ,{new:true,runValidators:true})
  //     .then(updatedCountry=>res.status(201).json(updatedCountry))
  //     .catch(error=>res.status(400).json({content:error.errors.content.message,title:error.errors.title.message}))
  // },
  // // ? ========== delete one =========
  // deleteCountry:(req,res)=>{
  //     Country.findByIdAndDelete(req.params.id)
  //     .then(deletedCountry=>res.status(200).json(deletedCountry))
  //     .catch(error=>res.stats(500).json(error))
  // }
};
