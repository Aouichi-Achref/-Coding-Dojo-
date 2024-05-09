const {loginStudent,registerStudent,findAllStudent,findOneStudent,updateStudent,deleteStudent} = require("../controllers/Student.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    // ? login 
    app.post('/login/Student',loginStudent)
    // create one Student
    app.post('/Student',registerStudent)
    // show all Student
    app.get('/Student',findAllStudent)
    // show one Student
    app.get('/Student/:id',findOneStudent) 
    // delete one Student
    app.delete('/Student/:id',deleteStudent)
    // update one Student
    app.patch('/Student/:id/edit',updateStudent)
}