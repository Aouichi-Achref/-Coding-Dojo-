import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'


const List = () => {
    const [countries,setCountries]=useState([])
    const nav=useNavigate

    useEffect(()=>{
        axios.get('http://localhost:8000/api/countries')
        .then(res=>setCountries(res.data))
        .catch(err=>console.error(err))
    },[])

    const deleteContry=(id)=>{
        axios.delete(`http://localhost:8000/api/countries/delete/${id}`)
        .then(res=>{setCountries(countries.filter(c=>c.id!==id))})
        .catch(err=>console.error(err))
    }

    return (
    <div className='container'>
        <h1><span style={{color:"red"}}>like</span> Dashbord</h1>
        <table>
            <thead>
                <th>Name</th>
                <th>Flag</th>
                <th>Independent</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {countries.map(c=>(
                    <tr key={c._id}>
                        <td>{c.name}</td>
                        <td><img src={c.flag} alt={c.name} height={50} /></td>
                        <td>{c.independent ? "YES":"NO"}</td>
                        <td>
                            <Link to={`/update/${c._id}`}>edit</Link>
                            <p></p>
                            <Link to={`/one/${c._id}`}>one</Link>
                            <button onClick={()=>deleteContry(c._id)}>delete</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default List