import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


const Form = () => {

    const [title,setTitle]= useState("")
    const [price,setPrice]= useState()
    const [description,setDescription]= useState("")

    const createHandler= (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/Product",{
            title,price,description
        })
        .then((res)=>{
            console.log(res,"👌send👌")
        }).catch((res)=>{
            console.log("😒😒",res,"😒😒😒")
        })
        setTitle("")
        setPrice("")
        setDescription("")
    }
    return (
    <>
    <form onSubmit={createHandler}>
        <div> {/* title div */}
            <label >product Title</label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
        </div>
        <div> {/* product Price div */}
            <label >product Price</label>
            <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
        </div>
        <div> {/*description  div */}
            <label >description</label>
            <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
        </div>
        <button>Create New Product</button>
    </form>
    </>
    )
}

export default Form