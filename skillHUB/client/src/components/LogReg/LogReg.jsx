import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import{Container,Col} from 'react-bootstrap'
import SignupInstractor from './SignupInstractor'
import SignupStudent from './SignupStudent'
import LoginInstractor from './LoginInstractor'
import LoginStudent from './LoginStudent'


const LogReg = () => {
  return (
    <>
    <Routes>
            <Route path='/signup/Student' element={<><SignupStudent/></>} />
            <Route path='/signup/instractor' element={<><SignupInstractor/></>} />
            <Route path='/login/Student' element={<><LoginStudent/></>} />
            <Route path='/login/instractor' element={<><LoginInstractor/></>} />
    </Routes>
    </>
  )
}

export default LogReg