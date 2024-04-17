const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

// ! middlewares
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };

const createUser = () => {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        number : faker.number.int(29999999),
        username: faker.internet.userName(),
        _id : faker.string.uuid()
        };
    return user;
};
const createCompany = () => {
    const company = {
        _id : faker.string.uuid(),
        name: faker.commerce.productName(),
        address : {
        street : faker.location.street(),
        city : faker.location.city(),
        state : faker.location.state(),
        zipCode : faker.location.zipCode(),
        country : faker.location.country()
        }
        };
    return company;
};
// const newFakeProduct = createProduct();
// console.log("========>>>",newFakeProduct);

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


app.listen(5000,()=>{console.log(">>>> Server is up and running on PORT 5000 and ready for your REQest and RESponce<<<<<<<")})