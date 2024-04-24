const AllAuthors = require("../controllers/authors.controller")

module.exports=(app)=>{
    //! not confirmed go to postMan 
    // create one Authors
    app.post('/authors',AllAuthors.createAuthors)
    // delete one Authors
    app.delete('/authors/:id',AllAuthors.deleteAuthors)
    // show all Authors
    app.get('/authors',AllAuthors.findAllAuthors)
    // show one Authors
    app.get('/authors/:id',AllAuthors.findOneAuthors) 
    // update one Authors
    app.patch('/authors/:id/edit',AllAuthors.updateAuthors)
}