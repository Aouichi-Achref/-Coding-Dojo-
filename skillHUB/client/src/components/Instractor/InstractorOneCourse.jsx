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

const InstractorOnemodulee = () => {
    const [module,setModule]=useState({})

    const nav =useNavigate()
useEffect(()=>{
    axios.get("http://localhost:8001/modules")
    .then(res=>{console.log(res);setModule(res.data);
        //! nestana fi login bech nchouf kifeh nekhou il id mte3 il instarctor li fi setion
    })
    .catch(err=>console.log(err))
},[])

    return (
    <div>
        one
    </div>
    )
}

export default InstractorOnemodulee