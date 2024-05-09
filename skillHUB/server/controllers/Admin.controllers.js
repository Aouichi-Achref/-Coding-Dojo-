const Admin =require("../models/Admin.models")

module.exports = {

      //? =========== READ ALL ==========
    findAllAdmin: (req, res) => {
        Admin.find()
            .then((AllAdmin) => {
            console.log(AllAdmin);
            res.status(200).json(AllAdmin);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneAdmin : (req, res) => {
        Admin.findOne({ _id: req.params.id })
            .then(oneSingleAdmin => {
                res.status(200).json(oneSingleAdmin);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    createAdmin : (req, res) => {
        Admin.create(req.body)
        .then((CreatedAdmin) => {
                    console.log(CreatedAdmin)
                    res.status(200).json(CreatedAdmin)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateAdmin : (req, res) => {
        Admin.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAdmin => {
                    res.status(200).json(updatedAdmin);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteAdmin : (req, res) => {
            Admin.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            }

}