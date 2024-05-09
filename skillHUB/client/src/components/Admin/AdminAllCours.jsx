import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'

const AdminAllCours = () => {
    //? state li bech nekhdim behom
    const [cours,setCours]=useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const Nav =useNavigate()
        
    useEffect(()=>{
        axios.get("http://localhost:8001/Cours")
        .then(res=>{console.log(res);setCours(res.data)})
        .catch(err=>console.log(err))
    },[])

    const deleteCours=(_id)=>{
        axios.delete(`http://localhost:8001/cours/${_id}`)
        .then(res=>{console.log(res)
            Nav('/admin/cours')
        })
        .catch(err=>console.error(err))
    
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(`http://localhost:8001/cours/search?q=${searchTerm}`);
          setCours(response.data);
        } catch (error) {
          console.error('Error searching students:', error);
        }
      };
    return (
        <div style={{
            backgroundColor:'gray'
        }} className="container d-flex flex-wrap justify-content-between">
    
        <div className='col-4'>
            {/* <h1><span style={{color:"red"}}>For </span> Instructor</h1> */}
            <h1><span style={{color:"red"}}>ALL </span><br /> Courses</h1>
        </div> 

        <div className='col-8'>
            <div className='row'>
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
                            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search By Course"/>
                            <button onSubmit={handleSubmit}>Search</button>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='row'>
    {cours.map(c=>(
    
        <div class="card col-1 m-2" style={{width: 300}} key={c._id} >
            <div class="card-body">
                <h5 style={{color:"red",textDecoration:"underline"}} class="card-title">title :{c.title}</h5>
                <p class="card-text">description :{c.description}</p>
                <p class="card-text">objective :{c.benefits}</p>
                <p class="card-text">Price :{c.price}$</p>
                <button className='btn btn-danger' onClick={()=>deleteCours(c._id)}>Delete</button>
            </div>   
        </div> 
            ))}
        </div>
    </div>
</div>

    )
}

export default AdminAllCours