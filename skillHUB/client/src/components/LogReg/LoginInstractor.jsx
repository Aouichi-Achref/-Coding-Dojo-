import React,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginInstractor = () => {
    const [password,setPassword]=useState(0)
    const [email,setEmail]=useState("")

    const Nav=useNavigate()


    const handelSubmit =(e)=>{
        e.preventDefault()
            axios.post('http://localhost:8001/login/Instractor',{email,password})
            .then(res=>{console.log(res);
                if(res.data==="Success"){
                    Nav('/instractor')}
            })
            .catch(err=>console.log(err))
            }
    return (
<div style={{width:"50vw"}} className='d-flex justifycontent-center align-items-center bg-secondary vh-80'>
        <div className='bg-white p-3 rounded w-100'>
            <h2><span style={{color:'red'}}>LO</span>gin</h2>
            <form onSubmit={handelSubmit}>
                <div className='mb-3'>
                <label htmlFor="email">
                    <strong><span style={{color:'red'}}>E</span>mail</strong>
                </label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                <label htmlFor="email">
                    <strong><span style={{color:'red'}}>Pass</span>word</strong>
                </label>
                <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Passwor' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
            </form>
        </div>
    </div>
    )
}

export default LoginInstractor