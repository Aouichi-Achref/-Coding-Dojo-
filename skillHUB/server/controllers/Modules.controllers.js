const Modules =require("../models/Modules.models")

module.exports = {

      //? =========== READ ALL ==========
    findAllModules: (req, res) => {
        Modules.find()
            .then((AllModules) => {
            console.log(AllModules);
            res.status(200).json(AllModules);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneModules : (req, res) => {
        Modules.findOne({ _id: req.params.id })
            .then(oneSingleModules => {
                res.status(200).json(oneSingleModules);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    createModules : (req, res) => {
        Modules.create(req.body)
        .then((CreatedModules) => {
                    console.log(CreatedModules)
                    res.status(200).json(CreatedModules)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateModules : (req, res) => {
        Modules.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedModules => {
                    res.status(200).json(updatedModules);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteModules : (req, res) => {
            Modules.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            }

}