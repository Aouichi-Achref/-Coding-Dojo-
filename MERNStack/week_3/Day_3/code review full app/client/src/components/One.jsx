import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate,useParams,Link } from 'react-router-dom'
const One = () => {
    const {id}=useParams()
    const [name,setName]=useState("")
    const [flag,setFlag]=useState("")
    const [independent,setIndependent]=useState(false)

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


    return (
    <div>
            <h1>{name}</h1>
            <div><img src={flag} alt={name} height={50} /></div>
            <h2>{independent ? "YES":"NO"}</h2>
            <div>
            <Link to={`/update/${id}`}>edit</Link>
        </div>
    </div>
    )
}

export default One