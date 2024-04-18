
//!===========Routes ===========


module.exports = (app) => {
    
// ! test route

app.get('/', (req , res) => {

    // ? console to see 'req.body'and we can remove 'not used'

    console.log("=======>=======>=======>"

    ,req.body,"<=======<=========<===========<=========<========");

    res.json({message : "server is up and running " , ok : true})

})



app.post('/api/users/new', (req, res) => {

    req.body = createUser()

    // ? console to see 'req.body'

    console.log("=======>=======>=======>"

    ,req.body,"<=======<=========<===========<=========<========");

    res.json({ newUser: req.body, message: "User created successfully", ok: true })

})



app.post(`/api/companies/new` , (req , res) => {

    req.body = createCompany()

    // ? console to see 'req.body'

    console.log("=======>=======>=======>"

    ,req.body,"<=======<=========<===========<=========<========");

    res.json({ newCompany : req.body , message :" company created successfully" , ok : true})

})



app.post(`/api/user/company` , (req , res) => {

    // ? console to see 'req.body' and we can remove 'not used'

    console.log("=======>=======>=======>"

    ,req.body,"<=======<=========<===========<=========<========");

    res.json({  newUser : createUser() ,newCompany : createCompany() , message :" user and company are created successfully" , ok : true})

})        
}