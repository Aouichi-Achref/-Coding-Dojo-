import React,{useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [password,setPassword]=useState(0)
    const [email,setEmail]=useState("")
    const [gitHUb,setgitHub]=useState("")
    const [degree,setDegree]=useState("")
    const [experience,setExperience]=useState("")
    const [dateOfBirth,setDateOfBirth]=useState(Date)
    const [bio,setBio]=useState("")
    const [image,setImage]=useState("")
    const [access,setAccess]=useState("instractor")

    const [errors,setErrors]=useState([])


    const handelSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8001/instractor',{firstName,lastName,password,email,
                    gitHUb,degree,experience,dateOfBirth,
                    bio,access})
        .then(res=>{console.log(res);
        })
        .catch(err=>{
            console.log(err.response.data.errors)
            const ServerErrors = err.response.data.errors
            const errArray = []
            for (const key of Object.keys(ServerErrors)) {
                errArray.push(ServerErrors[key].message)
            }
            setErrors(errArray)
        }
        )
    }

  return (
    <div style={{width:"50vw"}} className='d-flex align-items-center bg-secondary vh-80'>
        <div className='bg-white p-5 rounded w-100'>
            <h2><span style={{color:'red'}}>REG</span>ISTER</h2>
            <form onSubmit={handelSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>Fir</span>st Name</strong>
                    </label>
                    <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='Enter First Name' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>La</span>st Name</strong>
                    </label>
                    <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Enter Last Name' autoComplete='off' className='form-control rounded-0'/>
                </div>
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
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>git</span>HUb</strong>
                    </label>
                    <input onChange={(e)=>setgitHub(e.target.value)} type="text" placeholder='gitHub' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>Deg</span>ree</strong>
                    </label>
                    <input onChange={(e)=>setDegree(e.target.value)} type="text" placeholder='degree' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>Exp</span>erience</strong>
                    </label>
                    <input onChange={(e)=>setExperience(e.target.value)} type="text" placeholder='Experience' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>Im</span>age</strong>
                    </label>
                    <input type="file" onChange={(e)=>setImage(e.target.value)}
                    accept=".png, .jpg, .jpeg"
                    name="photo" className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>date<span style={{color:'red'}}> Of </span>Birth</strong>
                    </label>
                    <input onChange={(e)=>setDateOfBirth(e.target.value)} type="date" placeholder='Experience' autoComplete='off' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong><span style={{color:'red'}}>B</span>io</strong>
                    </label>
                    <input onChange={(e)=>setBio(e.target.value)} type="text" placeholder='bio' autoComplete='off' className='form-control rounded-0'/>
                </div>
                {
                        errors.map((err) => {
                        return <p style={{ color: "red" }}>{err}</p>
                        })
                    } 
                <button className='btn btn-success w-100 rounded-0'>Register</button>
                <p><span>Already</span> have an Account</p>
                <Link to='/home/login/instractor' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup