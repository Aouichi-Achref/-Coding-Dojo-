const AllProgress = require("../controllers/StudentProgress.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    //? create one Progress
    app.post('/Progress',AllProgress.createProgress)
    //? show all Progress
    app.get('/Progress',AllProgress.findAllProgress)
    //? show one Progress
    app.get('/Progress/:id',AllProgress.findOneProgress) 
    //? delete one Progress
    app.delete('/Progress/:id',AllProgress.deleteProgress)
    //? update one Progress
    app.patch('/Progress/:id/edit',AllProgress.updateProgress)
}