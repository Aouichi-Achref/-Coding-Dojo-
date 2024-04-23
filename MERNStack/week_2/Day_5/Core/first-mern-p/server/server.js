const express = require("express")
const cors = require('cors') // This is new
const app = express()
require("dotenv").config()


app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors()) // This is new

require("./config/mongoose.config")
require('./routes/product.routes')(app)
const PORT = process.env.PORT




app.listen(PORT,()=>{console.log(`👌👌👌👌👌👌SERVER IS RUNNING ON PORT ${PORT}`);})