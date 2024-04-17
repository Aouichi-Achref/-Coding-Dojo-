import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [pokemons, setPokemons] = useState([])
    // Fetching data with Axios 
    const AxiosApi = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then((res) => {
          console.log(res.data)
          setPokemons(res.data.results) // we know from the prev console log that this IS an Array of Data
        }).catch((err) => {
          console.log("❌❌❌❌❌❌", err)
        })
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{borderTop:"2px solid red"}}>Axios <span style={{ "color": "red" }}>pokemon</span> API Assignment</h1>
        <h2><span style={{ "color": "red" }}>Scrol</span> down for the assignment </h2>
        <fieldset>
        <legend>
          <h1>Axios <span style={{ "color": "red" }}>pokemon</span> API</h1>
        </legend>
        <div>
          <button 
            style={{padding:"10px 10px", fontSize:"28px" ,
            backgroundColor:"#61dafb", borderRadius:"5px" ,
            border:"2px solid black"}} onClick={AxiosApi}>get <span style={{ "color": "red" }}>pokemon</span> from API with <span style={{ "color": "red" }}>axios</span>
          </button>
            {pokemons.map((pokemons, idx) => <h1 key={idx}>{pokemons.name}</h1>)}
        </div>
      </fieldset>
      </header>
    </div>
  );
}

export default App;
