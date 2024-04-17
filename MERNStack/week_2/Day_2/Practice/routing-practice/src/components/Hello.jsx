import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Hello = () => {
    const {word}=useParams()
    const {WC}=useParams()
    const {BGC}=useParams()


    return (
        <h1 style={{background:BGC,color:WC}}> the word is :<p >{word}</p></h1>
    )
}

export default Hello