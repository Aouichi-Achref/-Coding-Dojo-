const Progress =require("../models/StudentProgress.models")

module.exports = {

      //? =========== READ ALL ==========
    findAllProgress: (req, res) => {
        Progress.find()
            .then((AllProgress) => {
            console.log(AllProgress);
            res.status(200).json(AllProgress);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneProgress : (req, res) => {
        Progress.findOne({ _id: req.params.id })
            .then(oneSingleProgress => {
                res.status(200).json(oneSingleProgress);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    createProgress : (req, res) => {
        Progress.create(req.body)
        .then((CreatedProgress) => {
                    console.log(CreatedProgress)
                    res.status(200).json(CreatedProgress)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateProgress : (req, res) => {
        Progress.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedProgress => {
                    res.status(200).json(updatedProgress);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteProgress : (req, res) => {
            Progress.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            }

}