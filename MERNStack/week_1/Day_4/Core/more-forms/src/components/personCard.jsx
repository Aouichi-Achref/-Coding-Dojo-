import React from 'react'

const PersonCard = (props) => {
    return (
        <div style={{backgroundColor:"orange", borderRadius:3}}>
        <fieldset style={{backgroundColor:"teal" , borderRadius:10}}>
            <h1 >welcome to the dojo world <span style={{color:"orange"}}> {props.person.firstname} {props.person.firstname} </span></h1>

            <h3 >FIRST NAME :{props.person.firstname}</h3>

            <h4> LAST NAME :{props.person.lastname}</h4>

            <h4> Email : {props.person.email}</h4>

            <h4> Password : {props.person.password}</h4>
        </fieldset>
        </div>
    )
}

export default PersonCard