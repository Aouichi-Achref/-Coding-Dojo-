const Cours =require("../models/Cours.models")

module.exports = {

      //? =========== READ ALL ==========
    findAllCours: (req, res) => {
        Cours.find()
            .then((AllCours) => {
            console.log(AllCours);
            res.status(200).json(AllCours);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneCours : (req, res) => {
        Cours.findOne({ _id: req.params.id })
            .then(oneSingleCours => {
                res.status(200).json(oneSingleCours);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    createCours : (req, res) => {
        Cours.create(req.body)
        .then((CreatedCours) => {
                    console.log(CreatedCours)
                    res.status(200).json(CreatedCours)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateCours : (req, res) => {
        Cours.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedCours => {
                    res.status(200).json(updatedCours);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteCours : (req, res) => {
            Cours.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            }

}