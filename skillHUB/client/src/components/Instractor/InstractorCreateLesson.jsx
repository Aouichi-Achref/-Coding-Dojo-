import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const InstractorCreateLesson = () => {
     //? state li bech nekhdim behom
    const [newLesson,setNewLesson]=useState({title:"",content:"",image:"",order:0,Lesson:"id Lesson li bech yhot fih"})
     //! ERROR STATE
    const [errors,setErrors]=useState([])
    const nav=useNavigate()

         // ? submit hadler fonctions feha axios
    const submitHandler= (e)=>{
    e.preventDefault()
    axios.post("http://localhost:8001/Lesson", newLesson)
    .then(res=>{nav('/Instractor')//! will go to add Lesson
    console.log(newLesson)
    setNewLesson({title:"",content:"",image:"",order:0})
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
        <div style={{width:"100%",margin:"5px"}}>
        <div style={{display:'flex',alignItems:'center',gap:"50%"}}>
        <h1 style={{margin:"30px"}}><sapn style={{color:"red"}} >New </sapn> Lesson</h1>
        </div>
            <form style={{backgroundColor:"white",borderRadius:"0px 0px 25px 0px",boxShadow:"1px 1px 3px red"}} class="container" onSubmit={(e)=>submitHandler(e)}>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:"red"}} >T</span>itle </label>
                    <input className="form-control" type="text" value={newLesson.title} onChange={(e)=>setNewLesson({...newLesson,"title":e.target.value})} />
                    {
                        newLesson.title.length<3 && newLesson.title.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>C</span>ontent </label>
                    <textarea className="form-control"  value={newLesson.content} onChange={(e)=>setNewLesson({...newLesson,"content":e.target.value})} />
                    {
                        newLesson.content.length<3 && newLesson.content.length !== 0? 
                        <p> field must be at least 2 characters.</p>:
                        <p></p>
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>I</span>mages </label>
                    <input type='text'  className="form-control"  value={newLesson.image} onChange={(e)=>setNewLesson({...newLesson,"image":e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><span style={{color:'red'}}>O</span>rder</label>
                    <input type='number' className="form-control"  value={newLesson.order} onChange={(e)=>setNewLesson({...newLesson,"order":e.target.value})} />
                    {
                        newLesson.order<= 0? 
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
                    <button style={{margin:"20px"}} className='btn btn-danger'>add lesson</button>
                    <button style={{margin:"20px"}} className='btn btn-danger'><Link to={"/Instractor/create/Module"}></Link>add lesson and new module</button>
                </div>
            </form>
    </div>
    </>
    )
}

export default InstractorCreateLesson