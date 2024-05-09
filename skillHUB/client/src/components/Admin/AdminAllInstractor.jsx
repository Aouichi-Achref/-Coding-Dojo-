import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'

const AdminAllInstractor = () => {
//? state li bech nekhdim behom
const [Instractor,setInstractor]=useState([])
const [searchTerm, setSearchTerm] = useState('');
const nav =useNavigate()

useEffect(()=>{
axios.get("http://localhost:8001/Instractor")
.then(res=>{console.log(res);setInstractor(res.data)})
.catch(err=>console.log(err))
},[])

const deleteInstractor=(id)=>{
    axios.delete(`http://localhost:8001/instractor/${id}`)
    .then(res=>{console.log(res)
    })
    .catch(err=>console.error(err))

}

const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8001/instractor/search?q=${searchTerm}`);
      setInstractor(response.data);
    } catch (error) {
      console.error('Error searching students:', error);
    }
  }
return (
    <div  style={{
        backgroundColor:'gray'
    }} className="container d-flex flex-wrap justify-content-between">
    
         <div className='col-4'>
            {/* <h1><span style={{color:"red"}}>For </span> Instructor</h1> */}
            <h1><span style={{color:"red"}}>ALL </span><br /> Instructor</h1>
        </div>  

        <div className='col-8'>
            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active p-2">
                        <Link to="/Admin/cours">Get all courses</Link>
                        </li>
                        <li class="nav-item p-2">
                        <Link to="/Admin/student">Get all students</Link>
                        </li>
                        <li class="nav-item p-2">
                        <Link to="/Admin/instractor">Get all instrutors</Link>
                        </li>
                        <li class="nav-item p-2">
                            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search By Instructor"/>
                            <button onSubmit={handleSubmit}>Search</button>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className='row' >
        {Instractor.map(c=>(
        
            <div class="card col-1 m-2" style={{width: 300}} key={c._id} >
                <img class="card-img-top" src={c.image} alt="Card image cap"/>
                <div class="card-body">
                    <h5  class="card-title">full Name : <br />{c.firstName} {c.lastName}</h5>
                    <p class="card-text">email :{c.email}</p>
                    <p class="card-text"> password : {c.password}</p>
                    <p class="card-text">gitHUb :{c.gitHUb}</p>
                    <p class="card-text">degree :{c.degree}</p>
                    <p class="card-text">experience :{c.experience}</p>
                    <p class="card-text">bio :{c.bio}</p>
                    <button className='btn btn-danger' onClick={()=>deleteInstractor(c._id)}>Delete</button>
                </div>   
            </div> ))}
        </div>
</div>
)
}

export default AdminAllInstractor