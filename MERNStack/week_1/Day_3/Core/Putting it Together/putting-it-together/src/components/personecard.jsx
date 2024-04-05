import React from "react";
import { useState } from 'react';

const PersonCard = (props) => {

    const [count, setCount] = useState(props.age)
    
    const newyear = () =>{

        setCount(count+1)
        if (count>70){
            alert(props.firstName + "your age is " + props.age + " you are almost there be carful")
        }
    }

    console.log(props);
    return (
        <>
            <div>
                <h1>{props.firstName},{props.lastName} </h1>
                <h2>age : {count}</h2>
                <h2>Hair Color : {props.hairColor}</h2>
                <button onClick ={newyear}>its my birthday </button>
                <br/>---------------------------------------<br />
            </div>
        </>
    )
}
export default PersonCard