import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Show = () => {
    const {name}=useParams()

    const [country,setcountry]=useState(null)

    useEffect(()=>{
        axios 
            .get(`https://restcountries.com/v3.1/name/${name}`)
            .then((res)=> setcountry(res.data[0]))
            .catch(err=>console.log(err))
    },[name])

    return (
        <div >
            {country ?<><h1 >{country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            <p style={{background:"teal",color:"orange",margin:"0px 10px",}}>capital: {country.capital[0]}</p>
            <p style={{background:"orange",color:"teal",margin:"0px 10px"}}>Population: {country.population}</p>
            </>:<p>...loading</p>}

        </div>
    )
}

export default Show