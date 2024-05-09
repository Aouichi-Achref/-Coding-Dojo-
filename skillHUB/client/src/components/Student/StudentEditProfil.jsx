import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const StudentEditProfil = () => {
    const [newProfil,setNewProfil]=useState({firstName:"",lastName:"",
                                email:"",password:0,gitHUb:"",degree:"",
                                experience:""})
        //! ERROR STATE
        const [errors,setErrors]=useState([])
        const nav=useNavigate()

            // ? submit hadler fonctions feha axios
    const submitHandler= (e)=>{
        e.preventDefault()
        axios.patch("http://localhost:8001/student", newProfil)//!still waiting for the instractor id 
        .then(res=>{nav('/Instractor/create/module')//! will go to add module
        setNewProfil({firstName:"",lastName:"",
        email:"",password:0,degree:"",
        experience:""})
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
                    <input className="form-control" type="text" value={newProfil.firstName} onChange={(e)=>setNewProfil({...newProfil,"firstName":e.target.value})} />
                    {
                        newProfil.firstName.length<3 && newProfil.firstName.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>Last</span> name </label>
                    <textarea className="form-control"  value={newProfil.lastName} onChange={(e)=>setNewProfil({...newProfil,"lastName":e.target.value})} />
                    {
                        newProfil.lastName.length<3 && newProfil.lastName.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>E</span>mail</label>
                    <textarea className="form-control"  value={newProfil.email} onChange={(e)=>setNewProfil({...newProfil,"email":e.target.value})} />
                    {
                        newProfil.email.length<3 && newProfil.email.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>Pas</span>sword</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={newProfil.password} onChange={(e)=>setNewProfil({...newProfil,"password":e.target.value})} />
                    {
                        newProfil.password.length<3 && newProfil.password.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>De</span>gree</label>
                    <input type='text' className="form-control" style={{color:'red'}}  value={newProfil.degree} onChange={(e)=>setNewProfil({...newProfil,"degree":e.target.value})} />
                    {
                        newProfil.degree.length<3 && newProfil.degree.length !== 0? 
                        <p> field must be at least 3 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>Exp</span>erience</label>
                    <textarea className="form-control" style={{color:'red'}}  value={newProfil.experience} onChange={(e)=>setNewProfil({...newProfil,"experience":e.target.value})} />
                    {
                        newProfil.experience.length<3 && newProfil.experience.length !== 0? 
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

export default StudentEditProfil