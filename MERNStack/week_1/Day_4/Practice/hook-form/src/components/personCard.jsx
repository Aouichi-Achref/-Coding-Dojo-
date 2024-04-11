import React from 'react'

const PersonCard = (props) => {
  return (
    <div style={{backgroundColor:"grey"}}>
        <legend >welcome to the dojo world</legend>

        <h3 >FIRST NAME :{props.person.firstname}</h3>

        <h4> LAST NAME :{props.person.lastname}</h4>

        <h4> Email : {props.person.email}</h4>

        <h4> Password : {props.person.password}</h4>


    </div>
  )
}

export default PersonCard