import logo from './logo.svg';
import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';
import One from './components/One';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'/'} style={{color:"red"}}>all</Link>
        <Link to={'/new'} style={{color:"red"}}>add</Link>
      </header>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/new' element={<Create/>}/>
        <Route path='/update/:id' element={<Edit/>}/>
        <Route path='/one/:id' element={<One/>}/>
      </Routes>
    </div>
  );
}

export default App;
