import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const IntractorCreate = () => {
        //? state li bech nekhdim behom
        const [newCours,setNewCours]=useState({title:"",description:"",benefits:"",price:0,instractor:"loginid"})
        //! ERROR STATE
        const [errors,setErrors]=useState([])
        const nav=useNavigate()

            // ? submit hadler fonctions feha axios
    const submitHandler= (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8001/Cours", newCours)
        .then(res=>{nav('/Instractor/create/module')//! will go to add module
        console.log(newCours)
        setNewCours({title:"",description:"",benefits:"",price:"",instractor:""})
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
        <h1 style={{margin:"30px"}}><sapn style={{color:"red"}} >New </sapn> Cours</h1>
        </div>
            <form style={{backgroundColor:"white",borderRadius:"0px 0px 25px 0px",boxShadow:"1px 1px 3px red"}} class="container" onSubmit={(e)=>submitHandler(e)}>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:"red"}} >T</span>itle </label>
                    <input className="form-control" type="text" value={newCours.title} onChange={(e)=>setNewCours({...newCours,"title":e.target.value})} />
                    {
                        newCours.title.length<3 && newCours.title.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>D</span>escription </label>
                    <textarea className="form-control"  value={newCours.description} onChange={(e)=>setNewCours({...newCours,"description":e.target.value})} />
                    {
                        newCours.description.length<3 && newCours.description.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>B</span>enefits</label>
                    <textarea className="form-control"  value={newCours.benefits} onChange={(e)=>setNewCours({...newCours,"benefits":e.target.value})} />
                    {
                        newCours.benefits.length<3 && newCours.benefits.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>p</span>rice</label>
                    <input type='number' className="form-control" style={{color:'red'}}  value={newCours.price} onChange={(e)=>setNewCours({...newCours,"price":e.target.value})} />
                    {
                        newCours.benefits <= 0? 
                        <p> price must be positive</p>:
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
                    <button style={{margin:"20px"}} className='btn btn-danger'>create cours</button>
                </div>
            </form>
    </div>
    )
}

export default IntractorCreate