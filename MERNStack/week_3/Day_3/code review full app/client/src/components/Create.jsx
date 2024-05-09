import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [name,setName]=useState("")
    const [flag,setFlag]=useState("")
    const [independent,setIndependent]=useState(false)
//! ERROR STATE
    const [errors,setErrors]=useState([])

    const nav=useNavigate()


    const submitHandler= (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/countries/new",{name,flag,independent})
        .then(res=>{nav('/')
                    setName("")
                    setFlag("")
                    setIndependent("")
                    })
                    .catch(err => {
                        console.log(err.response.data.errors.title)
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

export default Create