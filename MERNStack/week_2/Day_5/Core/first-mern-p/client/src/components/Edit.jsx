import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [Description, setDescription] = useState("")
    
    const nav = useNavigate()
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/product/"+id)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            }).catch((err) => {
                console.log(err)
            })
    }, [])


    const UpdateHandler = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:8000/product/"+id+"/edit", {
            title,price,Description
        })
            .then((res) => {
                console.log("✅✅✅✅✅",res.data)
                nav("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
    <div>
        <h2> <span>Update</span> Product</h2>
            <form onSubmit={UpdateHandler}>
                title :
                <input value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} />
                <br />
                description :
                <input value={Description} type="text" onChange={(e) => { setDescription(e.target.value) }} />
                <br />
                Price :
                <input value={price} type="number" onChange={(e) => { setPrice(e.target.value) }} />
                <br />
                <button>Update this product</button>


            </form>
    </div>
    )
}

export default Edit