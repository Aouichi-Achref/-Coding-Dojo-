import React from "react";

const PersonCard = (props) => {
    // person: {firs_name: 'Jane', last_name: 'Doe', age: 45, hair_color: 'Black'}
    console.log(props);
    return (
        <>
            <div>
                <h1>{props.firstName},{props.lastName} </h1>
                <h2>age : {props.age}</h2>
                <h2>Hair Color : {props.hairColor}</h2>
                <button onClick={ ()=> alert("zone agiter") }>dont click </button>
                ---------------------------------------<br />
            </div>
        </>
    )
}
export default PersonCard