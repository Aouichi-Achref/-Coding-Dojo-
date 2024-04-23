import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const One = () => {
    const [product, setProduct] = useState({})
    const {id} =useParams()
    const nav=useNavigate()

    useEffect(()=>{
        axios("http://localhost:8000/product/"+id)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/product/" + id)
            .then((res) => {
                console.log(product)
                setProduct(product._id((product) =>
                    product._id !== id))
                    nav('/')
            }).catch(err => {
                console.log(err)
            })
    }

    return (
    <div>
        <h2><span style={{color:"red"}}>one</span> product</h2>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h3>{product.description}</h3>
        <button onClick={()=>{deleteProduct(id)}}>delete this product</button>
    </div>
    )
}

export default One