import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import{Container,Col} from 'react-bootstrap'
//?import lil components mte3 Admin fil Admin li bech tokhroj final
import AdminAllCours from './AdminAllCours'
import AdminAllStudent from './AdminAllStudent'
import AdminAllInstractor from './AdminAllInstractor'


const Admin = () => {
    return (
    <>
    <Container>
        <Col >
        <Routes>
            <Route path='/cours' element={<><AdminAllCours/></>} />
            <Route path='/instractor' element={<><AdminAllInstractor/></>} />
            <Route path='/student' element={<><AdminAllStudent/></>} />
        </Routes>
        </Col >
    </Container>
    </>
    )
}

export default Admin