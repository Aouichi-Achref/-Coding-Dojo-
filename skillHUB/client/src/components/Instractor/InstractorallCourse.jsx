import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup
  } from 'mdb-react-ui-kit';
import { Container } from 'reactstrap';

const InstractorallCourse = () => {
        //? state li bech nekhdim behom
        const [cours,setCours]=useState([])
        const [myCours,SetMyCours]=useState([])

        const nav =useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8001/Cours")
        .then(res=>{console.log(res);setCours(res.data);
            //! nestana fi login bech nchouf kifeh nekhou il id mte3 il instarctor li fi setion
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <Container >
            <div >
        <MDBCardGroup className='d-flex flex-wrap' style={{padding:"4px",display:'flex',gap:"10px",marginTop:"5px"}}>
            {
                cours.map(c=>(
            <MDBCard  className='d-flex' style={{boxShadow:"1px 1px 2px red",borderRadius:"0px 0px 25px 0px"}} >
            <MDBCardBody >
                <MDBCardTitle><Link  to={`one/cours/${c._id}`}>cours : {c.title}</Link></MDBCardTitle>
                <MDBCardText style={{borderTop:"2px solid black"}}>
                <span style={{color:"red"}}>description : </span>{c.description}
                </MDBCardText>
                <MDBCardText style={{borderTop:"2px solid black"}}>
                <span style={{color:"red"}}>benefits : </span>{c.benefits}
                </MDBCardText>
            <MDBCardText style={{borderTop:"2px solid black"}}>
            <span style={{color:"red"}}>price : </span>{c.price}$
            </MDBCardText>
            <MDBCardText  style={{borderTop:"2px solid black"}}>            
                <Link className='btn btn-danger' to={`cours/${c._id}`}>edit</Link>
            </MDBCardText>
            </MDBCardBody>
            </MDBCard>
                ))}
        </MDBCardGroup>
        </div>
        </Container>
        );
    } 


export default InstractorallCourse