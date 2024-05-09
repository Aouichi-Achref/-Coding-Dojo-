const Instractor =require("../models/Instractor.models")
const bcrypt=require("bcrypt")

module.exports = {

      //? =========== READ ALL ==========
    findAllInstractor: (req, res) => {
        Instractor.find()
            .then((AllInstractor) => {
            console.log(AllInstractor);
            res.status(200).json(AllInstractor);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneInstractor : (req, res) => {
        Instractor.findOne({ _id: req.params.id })
            .then(oneSingleInstractor => {
                res.status(200).json(oneSingleInstractor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    registerInstractor : (req, res) => {
        Instractor.create(req.body)
        .then((CreatedInstractor) => {
                    console.log(CreatedInstractor)
                    res.status(201).json(CreatedInstractor)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateInstractor : (req, res) => {
        Instractor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedInstractor => {
                    res.status(200).json(updatedInstractor);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteInstractor : (req, res) => {
            Instractor.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            },
        //? =========== login ==========
        loginInstractor : async (req, res) => {
            const instractorFromDb = await Instractor.findOne({ email: req.body.email });
            if (!instractorFromDb ) {
              return res.status(400).json({ msg: 'Email not found' })
            }
              try {
            const isMatch = await bcrypt.compare(req.body.password, Instractor.password);
            if (!isMatch) {
              return res.status(400).json({ msg: 'Wrong password' });
            }
            return res.json({ instractorFromDb});
          } 
          catch(error){res.status(400).json(error.errors);}
        }
}