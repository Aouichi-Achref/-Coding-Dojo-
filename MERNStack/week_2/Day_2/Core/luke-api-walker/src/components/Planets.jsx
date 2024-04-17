import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



const Planet = () => {
    const [planet, setPlanet] = useState({});
    const navigate= useNavigate()

    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((res) => 
                setPlanet(res.data)
            ).catch((err) => navigate("/error"));
    }, [id]);

    return (
    <div style={{color:"red"}}>
        <h1 >name : {planet.name}</h1>
        <h1>population : {planet.population}</h1>
        <h1>terrain : {planet.terrain}</h1>
        <h1>orbital period : {planet.orbital_period}</h1>
    </div>
    )
}

export default Planet