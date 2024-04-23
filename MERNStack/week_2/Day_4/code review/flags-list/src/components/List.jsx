import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const List =()=>{
    const [countries,setcountries]=useState([])
    const nav = useNavigate()
    const [newName,setNewName]=useState("")
    const [newFlag,setNewFlag]=useState("")
    const [indep, setIndep]=useState(true)
    useEffect(()=>{
        axios 
            .get("https://restcountries.com/v3.1/all?fields=name,flags,independent")
            .then((res)=> setcountries(res.data))
            .catch(err=>console.log(err))
    },[])
    const createCountry= (e)=>{
        e.preventDefault()
        setcountries([...countries,{name:{common:newName},flags:{png: newFlag},independent:indep}])
        setNewFlag("")
        setNewName("")
    }

    const updateCountry=(idx)=>{
        const newList =countries
        newList[idx].independent= !newList[idx].independent
        setcountries(newList)
    }

    const deleteCountry=(idx)=>{
        setcountries(countries.filter((c,i) => i!==idx))
    }

    return(
        <div>
            <h1>List countries</h1>
            <form onSubmit={(e)=>createCountry(e)}>
                <label className="label-control">Name</label>
                <input type="text" className="form-control" onChange={(e)=>setNewName(e.target.value)} value={newName}/>
                <label className="label-control">Flag</label>
                <input type="text" className="form-control" onChange={(e)=>setNewFlag(e.target.value)} value={newFlag}/>
                <button className="btn btn-success">Create</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>flag</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((c,idx)=>
                    <tr>
                        <td>{c.independent ? c.name.common:<s>{c.name.common}</s>}</td>
                        <td><img src={c.flags.png} alt={c.name.common} /></td>
                        <td><input type="checkbox" checked={c.independent} onChange={(e)=>{updateCountry(idx); setIndep(!indep)}}/></td>
                        <td>
                            <button className="btn btn-info" onClick={()=>nav(`/country/${c.name.common}`)}>view</button>
                            <button className="btn btn-info" onClick={()=>deleteCountry(idx)}>delet</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default List