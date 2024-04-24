import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'

const Main = () => {
    const [author,setAuthor]=useState([])
    const nav =useNavigate()
    
    useEffect(()=>{
        axios.get("http://localhost:8001/authors")
        .then(res=>{console.log(res);setAuthor(res.data)})
        .catch(err=>console.log(err))
    },[])

    const deleteAuthors=(id)=>{
        axios.delete(`http://localhost:8001/authors/${id}`)
        .then(res=>{
            setAuthor(author.filter(c=>c._id!==id))

        })
        .catch(err=>console.error(err))

    }
    return (
        <div>
        <h1><span style={{color:"red"}}>ALL</span> Authors</h1>
        <Link to={'/authors/new'}>Add Authors</Link>
        <table className="table table-success table-striped">
            <thead>
                <th>Name</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {author.map(c=>(
                    <tr key={c._id}>
                        <td>{c.author}</td>
                        <td>
                            <Link to={`/authors/${c._id}/edit`} className='btn btn-info'>edit</Link>
                            <button className='btn btn-danger' onClick={()=>deleteAuthors(c._id)}>delete</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
        </div>
    )
}

export default Main