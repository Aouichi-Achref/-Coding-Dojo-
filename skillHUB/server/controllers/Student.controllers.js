const Student =require("../models/Student.models")

module.exports = {

      //? =========== READ ALL ==========
    findAllStudent: (req, res) => {
        Student.find()
            .then((AllStudent) => {
            console.log(AllStudent);
            res.status(200).json(AllStudent);
            })
            .catch((err) => {
            console.log(err);
            res.status(400).json();
            });
        },
        //? =========== READ ONE ==========
    findOneStudent : (req, res) => {
        Student.findOne({ _id: req.params.id })
            .then(oneSingleStudent => {
                res.status(200).json(oneSingleStudent);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
         //? =========== REGISTER ==========
         registerStudent : (req, res) => {
          Student.create(req.body)
          .then((CreatedStudent) => {
                      console.log(CreatedStudent)
                      res.status(201).json(CreatedStudent)
                  }).catch((err) => {
                  res.status(400).json(err)
              })
      },
            
        //? =========== UPDATE ==========
    updateStudent : (req, res) => {
        Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedStudent => {
                    res.status(200).json(updatedStudent);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
    },
        //? =========== DELETE ==========
    deleteStudent : (req, res) => {
            Student.deleteOne({ _id: req.params.id })
            .then(result => {
                        res.status(200).json(result);
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    });
            },


        //? =========== login ==========
        loginStudent : async (req, res) => {
            try {
              const student = await Student.findOne({ email: req.body.email });
              if (!student) {
                return res.status(400).json({ msg: 'Email not found' });
              }
              const isMatch = await bcrypt.compare(req.body.password, Student.password);
              if (!isMatch) {
                return res.status(400).json({ msg: 'Wrong password' });
              }
              return res.status(200).json({ student});
            } 
            catch(error){res.status(400).json(error.errors);}
          }

}