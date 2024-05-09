const express =require("express")
const cors =require("cors")
const app = express()

require("dotenv").config()
const PORT=process.env.PORT

//! midelwear

app.use(express.json(),express.urlencoded({extended:true}),cors())

//! jib config
require("./config/mongoose.config")

//! jib routes
require("./routes/country.routes")(app)

app.listen(PORT,()=>console.log(`👌👌👌👌👌👌SERVER IS RUNNING ON PORT ${PORT}`))