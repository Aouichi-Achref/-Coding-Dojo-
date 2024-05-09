import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBCardImage
  } from 'mdb-react-ui-kit';
import { Container } from 'reactstrap';
const StudentAllInstractor = () => {
        //? state li bech nekhdim behom
        const [instractor,setInstractor]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8001/instractor")
        .then(res=>{console.log(res);setInstractor(res.data);
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        <Container >
            <div >
        <MDBCardGroup className='d-flex flex-wrap' style={{padding:"4px",display:'flex',gap:"10px",marginTop:"5px"}}>
            {
                instractor.map(c=>(
            <MDBCard  className='d-flex' style={{boxShadow:"1px 1px 2px red",borderRadius:"0px 0px 25px 0px"}} >
                        <MDBCardImage style={{
                borderRadius:"0 0 15px 0px"
            }} src={c.image} position='top' alt='...' />    
            <MDBCardBody style={{}}>            
            <MDBCardTitle>fullName : {c.firstName} {c.lastName}</MDBCardTitle>
                <MDBCardText style={{borderTop:"2px solid black",display:"flex"}}>
                <box-icon color='red' name='gmail' type='logo' ></box-icon>
                {c.gitHUb}
                </MDBCardText>
                <MDBCardText style={{borderTop:"2px solid black"}}>
                <span style={{color:"red"}}>Experience : </span>{c.experience}
                </MDBCardText>
            <MDBCardText style={{borderTop:"2px solid black",display:"flex"}}>
            <box-icon color='red' name='gmail' type='logo' ></box-icon>
            {c.email}
            </MDBCardText>
            <MDBCardText  style={{display:'flex',justifyContent:'space-between'}}>
                <Link style={{borderRadius:"0px 0px 20px 0px"}} className='btn btn-danger' to={`instractor/${c._id}`}>view</Link>
            </MDBCardText>
            </MDBCardBody>
            </MDBCard>
                ))}
        </MDBCardGroup>
        </div>
        </Container>
        </>
  )
}

export default StudentAllInstractor