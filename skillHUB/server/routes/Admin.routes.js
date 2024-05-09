const AllAdmin = require("../controllers/Admin.controllers")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    //? create one Admin
    app.post('/Admin',AllAdmin.createAdmin)
    //? show all Admin
    app.get('/Admin',AllAdmin.findAllAdmin)
    //? show one Admin
    app.get('/Admin/:id',AllAdmin.findOneAdmin) 
    //? delete one Admin
    app.delete('/Admin/:id',AllAdmin.deleteAdmin)
    //? update one Admin
    app.patch('/Admin/:id/edit',AllAdmin.updateAdmin)
}