import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id}=useParams()
    const [name,setName]=useState("")
    const [flag,setFlag]=useState("")
    const [independent,setIndependent]=useState(false)
//! ERROR STATE
const [errors,setErrors]=useState([])
    const nav=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/countries/"+id)
        .then(res=>{
            setName(res.data.name)
            setFlag(res.data.flag)
            setIndependent(res.data.independent)
        })
        .catch(err=>{console.log(err)
        })
    },[id])

    const submitHandler= (e)=>{
        e.preventDefault()
        const newObj = {
            name,flag,independent
        }
        axios.patch(`http://localhost:8000/api/countries/update/${id}`,newObj)
        .then(res=>{
            nav('/')
            console.log(res)
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
        <form onSubmit={(e)=>submitHandler(e)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Flag</label>
                <input type="text" value={flag} onChange={(e)=>setFlag(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">independent</label>
                <input type="checkbox" checked={independent} onChange={(e)=>setIndependent(e.target.checked)}/>
            </div>
            <div>
            {
                errors.map((err) => {
                return <p style={{ color: "red" }}>{err}</p>
            })
            }            
            </div>

            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
    )
}


export default Edit