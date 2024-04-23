import logo from './logo.svg';
import './App.css';
import List from './components/List'
import { Route, Routes } from 'react-router-dom';
import Show from './components/Show';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/country/:name' element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default App;
