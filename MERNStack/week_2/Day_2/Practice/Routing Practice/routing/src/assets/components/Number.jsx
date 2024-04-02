import React from 'react'
import { useParams } from 'react-router-dom';


const Number = ()=> {

  const {num} = useParams()
  console.log(useParams)
  return (
    <fieldset>
    <legend><span style={{color:"red"}}>Wellcome</span> your number:: </legend>
    <h1>{num}</h1>
    </fieldset>
  )
}

export default Number