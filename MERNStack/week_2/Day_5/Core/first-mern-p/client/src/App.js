import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import One from './components/One';
import Edit from './components/Edit';
import Form from './components/Form';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2><span style={{color:"red"}}>prod</span>uct manager </h2>
      </header>
      <Routes>
      <Route path='/' element={<><Link style={{color:"red"}} to={'/product'}>create new Product</Link> </>} />
        <Route path='/product' element={<div><Form/> <Main/></div>} />
        <Route path='/product/:id' element={<div><One/></div>} />
        <Route path='/product/:id/edit' element={<div><Edit/></div>} />
      </Routes>
    </div>
  );
}

export default App;
