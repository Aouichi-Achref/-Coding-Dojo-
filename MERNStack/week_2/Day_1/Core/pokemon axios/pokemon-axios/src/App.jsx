import React, { useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  const axiosApi = () => {
    if (pokemon.length == 0) {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then((response) => {
          console.log(response);
          setPokemon(response.data.results)

        })
        .catch((error) => console.log(error));
    }
    else {
      setPokemon([])
    }
  };
  return (
    <>
      <fieldset>
        <legend>
          <h1><span style={{ "color": "red" }}>pokemon</span> API</h1>
        </legend>
        <div>
          <button onClick={axiosApi}>get <span style={{ "color": "red" }}>pokemon</span> from API with <span style={{ "color": "red" }}>axios</span></button>
          {pokemon.map((pokemons, idx) => <h1 key={idx}>{pokemons.name}</h1>)}
        </div>
      </fieldset>
    </>
  )
}

export default App
