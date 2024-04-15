import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [Pokemons,setpokemons]=useState([])

  //! fetch fonction

  const FetchPokemon= ()=> {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response => {
        // Not the actual JSON response body but the entire HTTP response
        return response.json()
      })
      .then((JsonResponse) => {
        // We now run another promise to parse the HTTP response into usable JSON
        console.log(JsonResponse)
        setpokemons(JsonResponse.results)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <h1 style={{borderTop:"2px solid red"}}><span style={{ "color": "red" }}>pokemon</span> API Assignment</h1>
        <h2><span style={{ "color": "red" }}>Scrol</span> down for the assignment </h2>
        <fieldset style={{marginTop:"40vmin",}}>
        <legend>
        <button 
        style={{padding:"10px 10px", fontSize:"28px" ,
        backgroundColor:"#61dafb", borderRadius:"5px" ,
        border:"2px solid black"}} onClick={FetchPokemon}> 
        get <span style={{ "color": "red" }}>pokemon</span> from API
        </button>
        </legend>
        {Pokemons.map((v, idx)=>{
        return <h3 key={idx}>name : {v.name}</h3> })}
</fieldset>
      </header>
    </div>
  );
}

export default App;
