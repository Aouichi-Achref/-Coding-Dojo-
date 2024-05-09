const AllCountry=require("../controllers/country.controller")

module.exports=(app)=>{

    app.get("/api/countries",AllCountry.findAllCountry)

    app.get("/api/countries/:id",AllCountry.findOneCountry)

    app.post("/api/countries/new",AllCountry.createCountry)

    app.patch("/api/countries/update/:id",AllCountry.updateCountry)

    app.delete("/api/countries/delete/:id",AllCountry.deleteCountry)

}