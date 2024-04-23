const AllProduct = require("../controllers/product.controllers")

module.exports=(app)=>{
    // create one product
    app.post('/Product',AllProduct.createProduct)
    // delete one Product
    app.delete('/product/:id',AllProduct.deleteProduct)
    // show all product
    app.get('/product',AllProduct.findAllProduct)//not confirmed go to postMan 
    // show one Product
    app.get('/product/:id',AllProduct.findOneProduct) //not confirmed go to postMan
    // update one Product
    app.patch('/product/:id/edit',AllProduct.updateProduct)
}