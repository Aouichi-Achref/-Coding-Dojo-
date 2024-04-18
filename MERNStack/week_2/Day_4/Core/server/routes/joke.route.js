const { createJoke, findOneJoke, findAllJokes, updateJoke, deleteJoke } = require("../controllers/joke.controller")



module.exports=(app)=>{
    app.post('/api/jokes/new',createJoke)
    app.get('/api/jokes/:id',findOneJoke)
    app.get('/api/jokes',findAllJokes)
    app.patch('/api/jokes/:id',updateJoke)
    app.delete('/api/jokes/:id',deleteJoke)
}