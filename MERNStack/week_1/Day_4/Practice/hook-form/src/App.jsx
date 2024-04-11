import logo from './logo.svg';
import './App.css';
import FormComponent from './components/formComp'
import {useState} from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FormComponent/>

    </div>
  );
}

export default App;
