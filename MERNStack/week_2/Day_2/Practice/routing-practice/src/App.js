import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link, useParams } from 'react-router-dom';
import Hello from './components/Hello';
import Home from './components/Home';
import Number from './components/number';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ROUTING PRACTICE assignment</h1>
        <div >
          <h2 style={{background:"teal"}}>trying the <span style={{color:"orange"}}>LINK</span> </h2>
    <Link style={{color:"red"}} to={'/home'}>Wellcome</Link> <br />
    <Link style={{color:"red"}} to={'/1'}> pree pick number</Link> <br />
    <Link style={{color:"red"}} to={'/ach'}>pree pick word</Link><br />
    <Link style={{color:"red"}} to={'/CA/black/red'}>all tricks</Link>
    </div>
      </header>
      <Routes>
        <Route path='/:x' element={<Number/>}/>
        <Route path='/:word/:WC/:BGC' element={<Hello/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
