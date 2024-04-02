import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [pokemon,setPokemon] = useState([])


    
  const fetchApi=()=>{

      fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  .then(response =>{return response.json()})
  .then(response=>{
    console.log("FETCH API RESPONSE AS JSON===>", response)
    (setPokemon(response.results))})
  .catch(err => {
      console.log(err);
  })

  }



  return (
    <fieldset>
      <legend>
        <h1><span style={{ "color": "red" }}>pokemon</span> API</h1>
      </legend>

      <div>
      <button onClick={fetchApi}>get <span style={{ "color": "red" }}>pokemon</span> from API</button>
<div>
    {pokemon.map((v, idx)=>{
        return <h3 key={idx}>name : {v.name}</h3> })}
</div>
      
    </div>
    </fieldset>
  )
}

export default App
