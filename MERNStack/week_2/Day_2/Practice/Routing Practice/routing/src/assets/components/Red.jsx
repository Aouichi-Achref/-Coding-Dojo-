import React from 'react'
import { useParams } from 'react-router-dom';



const Red=()=> {
  const {word,color} = useParams()

  return (
    <fieldset>
    <legend style={{color:'red'}}><span style={{color:'red'}}>Wellcome </span> </legend>
    <h1 style={{color:color}}>emm your word is: {word} and your color: {color}</h1>
    </fieldset>
  )
}

export default Red