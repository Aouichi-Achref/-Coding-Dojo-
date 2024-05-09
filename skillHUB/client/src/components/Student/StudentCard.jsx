import { Card,ListGroup } from 'react-bootstrap'
import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams} from 'react-router-dom'


const StudentCard = () => {
//! state To Use
const {id}=useParams()
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [gitHUb,setGitHUb]=useState("")
const [degree,setDegree]=useState("")
const [experience,setExperience]=useState("")
const [image,setImage]=useState("")
const [dateOfBirth,setDateOfBirth]=useState(Date)
const [educationLevel,setEducationLevel]=useState("")
//! use navigate
const nav=useNavigate()

// ?use efect to work on reload
// !axios get one Student by _id
useEffect(()=>{
    axios.get("http://localhost:8001/student/6633683d21018731dff11874")
    .then(res=>{
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
        setGitHUb(res.data.gitHUb)
        setDegree(res.data.degree)
        setExperience(res.data.experience)
        setImage(res.data.image)
        setDateOfBirth(res.data.dateOfBirth)
        setEducationLevel(res.data.educationLevel)
    })
    .catch(err=>{console.log(err)
    })
},[id])


return (
<>
<Card style={{color:'teal',boxShadow:"1px 1px 3px red",border:"0px solid black",width: '19vw',borderRadius:"0px 0px 25px 0px"}}>
    <Card.Img variant="top" src={image} alt="instractor card image" />
    <Card.Body>
    <Card.Title>profile</Card.Title>
    <Card.Text style={{color:'teal'}}>{dateOfBirth}
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item style={{color:'teal'}}>{firstName}</ListGroup.Item>
    <ListGroup.Item style={{color:'teal'}}>{lastName}</ListGroup.Item>
    </ListGroup><br/>
    <Card.Body>
    <Card.Link style={{color:'teal'}} href="#"><box-icon color='red' name='gmail' type='logo' ></box-icon>{email}</Card.Link>
    <p></p>
    <Card.Link style={{borderRadius:"0px 0px 20px 0px"}} className='btn btn-danger ' href="/student/edit/Profil">edit profil</Card.Link>
    </Card.Body>
</Card>
</>
)
}


export default StudentCard