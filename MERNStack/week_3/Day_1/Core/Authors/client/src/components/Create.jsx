import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {

    const [author,setAuthor]=useState("")
//! ERROR STATE
    const [errors,setErrors]=useState([])
    const nav=useNavigate()

    const submitHandler= (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8001/authors", {author})
        .then(res=>{nav('/authors')
                    setAuthor("")
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
    <div>
        <h1 style={{margin:"30px"}}><sapn style={{color:"red"}} >Add </sapn> new Author</h1>
        <form style={{border:"2px solid black"}} class="container" onSubmit={(e)=>submitHandler(e)}>
            <div className="mb-3">
                <label className="form-label">Name : </label>
                <input className="form-control" type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} />
            </div>
            <div>
            {
                errors.map((err) => {
                return <p style={{ color: "red" }}>{err}</p>
            })
            }            
            </div>
            <div>
                <Link className='btn btn-danger' to={'/authors'}>CANCEL</Link>
                <button style={{margin:"20px"}} className='btn btn-info'>Submit</button>
            </div>
        </form>
    </div>
    )
}

export default Create