const AllLesson = require("../controllers/Lesson.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    // create one Lesson
    app.post('/Lesson',AllLesson.createLesson)
    // show all Lesson
    app.get('/Lesson',AllLesson.findAllLesson)
    // show one Lesson
    app.get('/Lesson/:id',AllLesson.findOneLesson) 
    // delete one Lesson
    app.delete('/Lesson/:id',AllLesson.deleteLesson)
    // update one Lesson
    app.patch('/Lesson/:id/edit',AllLesson.updateLesson)
}