const Lesson =require("../models/Lesson.modules")

module.exports = {

      //? =========== READ ALL ==========
    findAllLesson: (req, res) => {
        Lesson.find()
            .then((AllLesson) => {
            console.log(AllLesson);
            res.status(200).json(AllLesson);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneLesson : (req, res) => {
        Lesson.findOne({ _id: req.params.id })
            .then(oneSingleAuthor => {
                res.status(200).json(oneSingleAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== CREATE ==========
    createLesson : (req, res) => {
        Lesson.create(req.body)
        .then((CreatedLesson) => {
                    console.log(CreatedLesson)
                    res.status(200).json(CreatedLesson)
                }).catch((err) => {
                res.status(400).json(err)
            })
    },
        //? =========== UPDATE ==========
    updateLesson : (req, res) => {
        Lesson.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedLesson => {
                    res.status(200).json(updatedLesson);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteLesson : (req, res) => {
            Lesson.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            }

}