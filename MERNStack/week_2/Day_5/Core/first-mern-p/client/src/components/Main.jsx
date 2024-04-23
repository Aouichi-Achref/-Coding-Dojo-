import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    const [allProduct,setAllProduct]= useState([])
    const nav = useNavigate
    
    useEffect(() => {
        axios.get("http://localhost:8000/product")
            .then((res) => {
                setAllProduct(res.data.allProducts)
                console.log(allProduct)
            }).catch(err => {
                console.log(err)
            
            })
    }, [])

    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/product/" + id)
            .then((res) => {
                console.log(allProduct)
                setAllProduct(allProduct.filter((p) => p._id !== id))

                nav('/product')

            }).catch(err => {
                console.log(err)
            })
    }

    return (
    <div>
        <h2><span style={{color:"red"}}>here</span> you finde all products</h2>
        {   
        allProduct.map((Product)=>{
            return(
                <div key={Product._id}>
                    <Link to={"/product/"+Product._id}>{Product.title}</Link>
                    <h4>{Product.price}</h4>
                    <Link to={"/product/"+Product._id+"/edit"}>Edit</Link>
                    <button onClick={()=>{deleteProduct(Product._id)}}>delete this product</button>
                </div>
            )
        })
        }

    </div>
    )
}

export default Main