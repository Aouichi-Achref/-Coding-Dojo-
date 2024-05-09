import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import{Container,Col} from 'react-bootstrap'
//?import components
import StudentAllCourse from './StudentAllCourse'
import StudentCard from './StudentCard'
import StudentAllInstractor from './StudentAllInstractor'
import StudentEditProfil from './StudentEditProfil'
import StudentNav from './StudentNav'

const Student = () => {
    return (
<>
<Container style={{display:"flex",background:"lightGray",padding:'5px',width:"100vw",
                boxShadow:"1px 1px 2px red",borderRadius:"0px 0px 25px 0px"}}>        
    {/*? jnab win bech tji il  card ?*/}
    <Col >
        <Routes>
            <Route path='/*' element={<><StudentCard/></>} />
        </Routes>
    </Col >
        {/* 3abi il wost */}
        <Container>
            {/* nav sghira li lfou9 il wost mte3 Student  */}
            <StudentNav/>
        <Routes>
            <Route path='/all/cours' element={<><StudentAllCourse/></>} />
            <Route path='/all/instractor' element={<><StudentAllInstractor/></>} />
            <Route path='/edit/Profil' element={<><StudentEditProfil/></>} />
        </Routes>
        </Container>
    <Col>
        
    </Col>
    </Container>
    </>
    )
}

export default Student