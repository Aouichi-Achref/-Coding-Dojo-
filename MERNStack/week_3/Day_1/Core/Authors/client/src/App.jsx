import logo from './logo.svg';
import './App.css';
import {Routes,Route, Link} from 'react-router-dom'
import Main from './components/Main';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AUTHORS ASSIGNMENT</h1>
        <div style={{display:"flex",gap:'20px'}}> <Link to={'/authors'}>ALL LIST</Link></div>
      </header>
      <Routes >
        <Route path='/authors' element={<Main/>} />
        <Route path='/authors/new' element={<Create/>}/>
        <Route path='/authors/:id/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
