const AllCours = require("../controllers/Cours.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    //? create one Cours
    app.post('/Cours',AllCours.createCours)
    //? show all Cours
    app.get('/Cours',AllCours.findAllCours)
    //? show one Cours
    app.get('/Cours/:id',AllCours.findOneCours) 
    //? delete one Cours
    app.delete('/Cours/:id',AllCours.deleteCours)
    //? update one Cours
    app.patch('/Cours/:id/edit',AllCours.updateCours)
}