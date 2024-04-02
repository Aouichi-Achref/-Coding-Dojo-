import { useState } from 'react'
import {
  Routes, Route,Link
} from'react-router-dom'
import './App.css'

// ! import from components
import Wellcome from './assets/components/Wellcome'
import Say from './assets/components/say'
import Red from './assets/components/Red'
import Number from './assets/components/Number'

function App() {

  return (
    <>
    <div>
    <Link to={'/'}>Wellcome</Link> <br />
    <Link to={'/number/1920/'}>pick number</Link> <br />
    <Link to={'/say/ClubAfricain/'}>word shose </Link><br />
    <Link to={'/CA/red'}>color shose</Link><br />
    <Link to={'/all/1920/CA/black'}>all content is here</Link>
    </div>
    <Routes>
    <Route path='/all/:num/:word/:color' element={<>
    <Wellcome/>
    <Number/>
    <Say/>
    <Red/>
    </>}/>
      <Route path='/' element={<Wellcome/>}/>
      <Route path='/number/:num/' element={<Number/>}/>
      <Route path='/say/:word/' element={<Say/>}/>
      <Route path='/:word/:color' element={<Red/>}/>
      <Route path='*' element={<><h1>404 NOT FOUND <br /><img src="https://imgs.search.brave.com/KZROsCR9SkKBJjIvJMy1YlO8-zS4Cnv04ASg1Tq4mEo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQ1LzMyLzg1/LzM2MF9GXzM0NTMy/ODUzNl9vQWJpT05q/dGVaVmlxSUpqeUNU/eThNNVRoeWNVTmRx/Mi5qcGc" alt="" />
        </h1></>}/>
    </Routes>
    </>
  )
}

export default App
