const Product =require("../models/product.model")

module.exports = {
    //? ========= create one ===========
    createProduct:(req,res)=>{
        Product.create(req.body)
        .then(createdProduct=>res.status(201).json({data:createdProduct,
                                                    message:'New Product Created with success!! you see its easy ',ok:true}))
        .catch(err=>{console.log(err);
        res.status(400).json({ error: err.message })})
    },
    // ? ========= view all =========
    findAllProduct:(req,res)=>{
        Product.find()
        .then(allProducts=> res.status(200).json({allProducts,message:'All Products :',ok:true})
        ).catch(error=>res.status(500).json(error))
    },
    // ? ========= view one =======
    findOneProduct:(req,res)=>{
        Product.findById(req.params.id)
        .then(oneProduct=>{
            if(!oneProduct){
                res.status(404).json({error:"Product Not Found"})
            }else{
                res.status(200).json(oneProduct)
            }
        })
        .catch(error=> res.status(500).json(error))
    },
    // ? ========== update one =========
    updateProduct:(req,res)=>{
        Product.findByIdAndUpdate(req.params.id,req.body ,{new:true,runValidators:true})
        .then(updatedProduct=>res.status(201).json(updatedProduct))
        .catch(error=>res.status(400).json({content:error.errors.content.message,title:error.errors.title.message}))
    },
    // ? ========== delete one ========= 
    deleteProduct:(req,res)=>{
        Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct=>res.status(200).json(deletedProduct))
        .catch(error=>res.stats(500).json(error))
    }

}