const AllModules = require("../controllers/Modules.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    // create one Modules
    app.post('/Modules',AllModules.createModules)
    // show all Modules
    app.get('/Modules',AllModules.findAllModules)
    // show one Modules
    app.get('/Modules/:id',AllModules.findOneModules) 
    // delete one Modules
    app.delete('/Modules/:id',AllModules.deleteModules)
    // update one Modules
    app.patch('/Modules/:id/edit',AllModules.updateModules)
}