import React ,{ useEffect, useState }from "react";
import { Link, useParams } from 'react-router-dom'


const Number = () => {
    const {x} = useParams()

    return (
        <>
        {isNaN(+x)?
        <h1> your word is <p style={{color:"red"}}>{x}</p></h1>
        :<h1> your Number is <p style={{color:"red"}}>{x}</p></h1>}
        </>
    )
}

export default Number