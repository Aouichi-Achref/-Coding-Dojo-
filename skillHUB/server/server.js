const express = require("express")
const cors = require('cors') // This is new
const app = express()
const bcrypt = require("bcrypt")

require("dotenv").config()

//! midelwear
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

require('./config/mongoose.config')
require('./routes/Admin.routes')(app)
require('./routes/Cours.routes')(app)
require('./routes/Instractor.routes')(app)
require('./routes/Lesson.routes')(app)
require('./routes/Modules.routes')(app)
require('./routes/Student.routes')(app)
require('./routes/StudentProgress.routes')(app)

const PORT = process.env.PORT

app.listen(PORT,()=>{console.log(`👌👌👌👌👌👌SERVER IS RUNNING ON PORT ${PORT}`);})
