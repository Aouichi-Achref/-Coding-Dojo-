import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate,useParams } from 'react-router-dom'

const InstractorEdit = () => {
    const [updatedcours,setUpdatedcours]=useState({title:"",description:"",benefits:"",price:1,instractor:"loginid"})

    //! ERROR STATE
    const [errors,setErrors]=useState([])
    const nav=useNavigate()
    const {id}=useParams()
   //? get one by id 
    useEffect(()=>{
        axios.get("http://localhost:8001/cours/"+id)
        .then(res=>{
            console.log(res.data)
            setUpdatedcours({...updatedcours,"benefits":res.data.benefits})
            setUpdatedcours({...updatedcours,"description":res.data.description})
            setUpdatedcours({...updatedcours,"price":res.data.price})
            setUpdatedcours({...updatedcours,"title":res.data.title})
        })
        .catch(err=>{console.log(err)
        })
    },[id])

        const submitHandler= (e)=>{
            e.preventDefault()
            const newObj={
            updatedcours
            }
            console.log(newObj)
            axios.patch(`http://localhost:8001/courss/${id}/edit`, newObj)
            .then(res=>{nav('/')//! will go to main
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
<div style={{width:"100%",margin:"5px"}}>
        <div style={{display:'flex',alignItems:'center',gap:"50%"}}>
        <h1 style={{margin:"30px"}}><sapn style={{color:"red"}} >Edit </sapn> Cours</h1>
        </div>
            <form style={{border:"2px solid black"}} class="container" onSubmit={(e)=>submitHandler(e)}>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:"red"}} >T</span>itle </label>
                    <input className="form-control" type="text" value={updatedcours.title} onChange={(e)=>setUpdatedcours({...updatedcours,"title":e.target.value})} />
                    {
                        updatedcours.title.length<3 && updatedcours.title.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>D</span>escription </label>
                    <textarea className="form-control"  value={updatedcours.description} onChange={(e)=>setUpdatedcours({...updatedcours,"description":e.target.value})} />
                    {
                        updatedcours.description.length<3 && updatedcours.description.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>B</span>enefits</label>
                    <textarea className="form-control"  value={updatedcours.benefits} onChange={(e)=>setUpdatedcours({...updatedcours,"benefits":e.target.value})} />
                    {
                        updatedcours.benefits.length<3 && updatedcours.benefits.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>p</span>rice</label>
                    <input type='number' className="form-control"  value={updatedcours.price} onChange={(e)=>setUpdatedcours({...updatedcours,"price":e.target.value})} />
                    {
                        updatedcours.benefits <= 0? 
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
                    <button style={{margin:"20px"}} className='btn btn-danger'>submit</button>
                </div>
            </form>
    </div>
    )
}

export default InstractorEdit