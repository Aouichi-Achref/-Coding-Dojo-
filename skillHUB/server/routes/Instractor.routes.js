const AllInstractor = require("../controllers/Instractor.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    // ? login 
    app.post('/login/Instractor',AllInstractor.loginInstractor)
    // create one Instractor
    app.post('/instractor',AllInstractor.registerInstractor)
    // show all Instractor
    app.get('/instractor',AllInstractor.findAllInstractor)
    // show one Instractor
    app.get('/instractor/:id',AllInstractor.findOneInstractor) 
    // delete one Instractor
    app.delete('/instractor/:id',AllInstractor.deleteInstractor)
    // update one Instractor
    app.patch('/instractor/:id/edit',AllInstractor.updateInstractor)
}