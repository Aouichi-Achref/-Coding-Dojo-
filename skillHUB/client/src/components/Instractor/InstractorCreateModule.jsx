import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const InstractorCreateModule = () => {
            //? state li bech nekhdim behom
            const [newModule,setNewModule]=useState({title:"",description:"",order:0,lesson:"loginid"})
            //! ERROR STATE
            const [errors,setErrors]=useState([])
            const nav=useNavigate()
    
                // ? submit hadler fonctions feha axios
    const submitHandler= (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8001/Modules", newModule)
        .then(res=>{nav('/Instractor/create/lesson')//! will go to add module
        console.log(newModule)
        setNewModule({title:"",description:"",order:0,lesson:""})
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
    <>
        <div style={{width:"100%",margin:"5px",fontSize:"x-large"}}>
        <div style={{display:'flex',alignItems:'center',gap:"50%"}}>
        <h1 style={{margin:"30px"}}><sapn style={{color:"red"}} >New </sapn> Module</h1>
        </div>
            <form style={{backgroundColor:"white",border:"1px solid red",borderRadius:"0px 0px 25px 0px",boxShadow:"1px 1px 3px red"}} class="container" onSubmit={(e)=>submitHandler(e)}>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:"red"}} >T</span>itle </label>
                    <input className="form-control" type="text" value={newModule.title} onChange={(e)=>setNewModule({...newModule,"title":e.target.value})} />
                    {
                        newModule.title.length<3 && newModule.title.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>D</span>escription </label>
                    <textarea className="form-control"  value={newModule.description} onChange={(e)=>setNewModule({...newModule,"description":e.target.value})} />
                    {
                        newModule.description.length<3 && newModule.description.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>O</span>rder</label>
                    <input type='number' className="form-control"  value={newModule.order} onChange={(e)=>setNewModule({...newModule,"order":e.target.value})} />
                    {
                        newModule.order<= 0? 
                        <p> Order must be Positive</p>:
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
                    <button style={{margin:"20px"}} className='btn btn-danger'>create Module</button>
                </div>
            </form>
    </div>
    </>
    )
}

export default InstractorCreateModule