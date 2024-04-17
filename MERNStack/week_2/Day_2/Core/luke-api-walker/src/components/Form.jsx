import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {

    const nav = useNavigate()

    const [choice,setChoice] = useState("")
    const [id,setId] = useState("") 

    const formHandler=(e)=>{

        e.preventDefault()
        setChoice("")
        setId("")
        nav(`/${choice}/${id}`)
    }

    return (
        <div>
        <form onSubmit={formHandler} style={{display:"flex", gap:"50px" ,marginBottom:"10px"}} >
            <label>your loking for :</label>
                <select onChange={(e)=>setChoice(e.target.value)} value={choice} >
                    <option value="" >Peoples or Planets</option>
                    <option value="people"  >People</option>
                    <option value="planets" >Planets</option>
                </select>
            <label>id:</label>
                <input type="number" onChange={(e)=>setId(e.target.value)} value={id}/>
                    <button>Search</button>
        </form>
    </div>
    )
}

export default Form