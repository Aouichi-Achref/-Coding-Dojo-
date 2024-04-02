import React from 'react'
import { useParams } from 'react-router-dom'




const Say= ()=> {
  const {word} = useParams()
  return (

    <fieldset>
    <legend><span style={{color:'red'}}>Wellcome</span> you say </legend>
    <div >
    <h1 >The word is : {word}</h1>
    </div>
    </fieldset>
  )
}

export default Say