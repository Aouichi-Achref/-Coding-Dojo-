import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import{Container,Col} from 'react-bootstrap'
// import components
import InstractorCard from './instractorCard';
import IntractorCreate from '../Instractor/IntractorCreate'
import InstractorCreateModule from './InstractorCreateModule';
import InstractorCreateLesson from './InstractorCreateLesson';
import InstractorallCourse from './InstractorallCourse';
import InastarctoNav from './inastarctoNav';
import InstractorEdit from './InstractorEdit';
import InstractorEditProfil from './InstractorEditProfil';
import InstractorOneCourse from './InstractorOneCourse';
const Instractor = () => {
    return (
    <>
    <Container style={{display:"flex",background:"lightGray",padding:'5px',width:"100vw",
                        boxShadow:"1px 1px 2px red",borderRadius:"0px 0px 25px 0px"}}>
        {/*? jnab win bech tji il  card ?*/}
    <Col >
        <Routes>
            {/* nav sghira li lfou9 il wost mte3 Instractor  */}
            <Route path='/*' element={<><InstractorCard/></>} />
        </Routes>
    </Col >
        {/* 3abi il wost */}
        <Container>
        <InastarctoNav/>
        <Routes>
        <Route path='/' element={<><InstractorallCourse/></>} />
            <Route path='/edit/Profil' element={<><InstractorEditProfil/></>} />
            <Route path='/create/cour' element={<><IntractorCreate/></>} />
            <Route path='one/cours/:id/' element={<><InstractorOneCourse/></>} />
            <Route path='/cours/:id/' element={<><InstractorEdit/></>} />
            <Route path='/create/Module' element={<><InstractorCreateModule/></>} />
            <Route path='/create/Lesson' element={<><InstractorCreateLesson/></>} />
            <Route path='/create/Lesson' element={<><InstractorCreateLesson/></>} />
        </Routes>
        </Container>
    <Col >
        
    </Col>
    </Container>
    </>
    )
}

export default Instractor