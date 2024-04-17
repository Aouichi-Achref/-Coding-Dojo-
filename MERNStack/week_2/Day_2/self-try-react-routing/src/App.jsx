import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./components/main"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      {
        <>
          <Main/>
          <BrowserRouter>
          <Routes>
            <Route path='/header' element={<Header/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/header/footer' element={<><Footer/><Header/></>}/>
          </Routes>
          <Routes>
            <Route path='/header' element={<Header/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/header/footer' element={<><Footer/><Header/></>}/>
          </Routes>
          </BrowserRouter>

        </>
      }
    </div>
  );
}

export default App;
