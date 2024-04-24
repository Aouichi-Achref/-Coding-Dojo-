const express = require("express")
const cors = require('cors') // This is new
const app = express()

require("dotenv").config()

//! midelwear
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

require('./config/mongoose.config')
require('./routes/authors.routes')(app)
const PORT = process.env.PORT

app.listen(PORT,()=>{console.log(`👌👌👌👌👌👌SERVER IS RUNNING ON PORT ${PORT}`);})
