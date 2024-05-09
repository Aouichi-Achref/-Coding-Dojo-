import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const InstractorEditProfil = () => {

    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [gitHUb,setGitHUb]=useState("")
    const [degree,setDegree]=useState("")
    const [experience,setExperience]=useState("")
    const [image,setImage]=useState("")
    const [dateOfBirth,setDateOfBirth]=useState(Date)
    const [bio,setBio]=useState("")
    const [createdAt,setCreatedAt]=useState("")
        //! ERROR STATE
        const [errors,setErrors]=useState([])
        const nav=useNavigate()

    // ? submit hadler fonctions feha axios

    useEffect(()=>{
        axios.get("http://localhost:8001/instractor/663c7af3af03d008740d78ce")
        .then(res=>{
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setGitHUb(res.data.gitHUb)
            setDegree(res.data.degree)
            setExperience(res.data.experience)
            setImage(res.data.image)
            setDateOfBirth(res.data.dateOfBirth)
            setBio(res.data.bio)
        })
        .catch(err=>{console.log(err)
        })
    },[])


    const submitHandler= (e)=>{
        e.preventDefault()
        axios.patch("http://localhost:8001/instractor", {firstName,lastName,email,password,gitHUb,degree,
                                                        experience,image,bio})//!still waiting for the instractor id 
        .then(res=>{nav('/Instractor/create/module')//! will go to add module
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
        setPassword(res.data.password)
        setGitHUb(res.data.gitHUb)
        setDegree(res.data.degree)
        setExperience(res.data.experience)
        setImage(res.data.image)
        setDateOfBirth(res.data.dateOfBirth)
        setBio(res.data.bio)


    })
            
            .catch(err => {
                console.log(err.response.data.errors)
                const ServerErrors = err.response.data.errors
                const errArray = []
                for (const key of Object.keys(ServerErrors)) {
                    errArray.push(ServerErrors[key].message)
                }
                setErrors(errArray)
        })
    }



    return (
<div style={{width:"100%",margin:"5px",fontSize:"x-large"}}>
        <div style={{display:'flex',alignItems:'center',gap:"50%"}}>
        <h1 style={{margin:"30px"}}><sapn style={{color:"red"}} >Edit </sapn> Profil</h1>
        </div>
            <form style={{backgroundColor:"white",borderRadius:"0px 0px 25px 0px",boxShadow:"1px 1px 3px red"}} class="container" onSubmit={(e)=>submitHandler(e)}>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:"red"}} >First</span> Name</label>
                    <input className="form-control" type="text" value={firstName} onChange={(e)=>setFirstName( e.target.value)} />
                    {
                        firstName.length<3 && firstName.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>Last</span> name </label>
                    <textarea className="form-control"  value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    {
                        lastName.length<3 && lastName.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>E</span>mail</label>
                    <textarea className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    {
                        email.length<3 && email.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>P</span>assword</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={password} onChange={(e)=>setPassword(e.target.value)} />
                    {
                        password.length<3 && password.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>Git</span>HUb</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={gitHUb} onChange={(e)=>setGitHUb(e.target.value)} />
                    {
                        gitHUb.length<3 && gitHUb.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>D</span>egree</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={degree} onChange={(e)=>setDegree(e.target.value)} />
                    {
                        degree.length<3 && degree.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>E</span>xperience</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={experience} onChange={(e)=>setExperience(e.target.value)} />
                    {
                        experience.length<3 && experience.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>B</span>io</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={bio} onChange={(e)=>setBio(e.target.value)} />
                    {
                        bio.length<3 && bio.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div>
                    {
                        errors.map((err) => {
                        return <p style={{ color: "red" }}>{err}</p>
                        })
                    }            
                </div>
                <div>
                    <button style={{margin:"20px"}} className='btn btn-danger'>submit </button>
                </div>
            </form>
    </div>
    )
}

export default InstractorEditProfil