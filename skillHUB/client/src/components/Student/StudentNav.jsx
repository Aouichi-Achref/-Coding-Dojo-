import React from 'react';
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const StudentNav = () => {
  return (
    <div>
        <MDBNavbar light bgColor='dark' style={{
          padding:"5px",
          border:"0px solid red",
          borderRadius:"0px 0px 20px 0px",
          boxShadow:"2px 2px 2px red"
        }}>
      <MDBContainer style={{
        display:'flex',gap:"5px"
      }} tag="form"  className='justify-content-start'>
      <Link  to={'all/cours'}>
        <MDBBtn outline color="danger"  >
          Get All Courses
        </MDBBtn>
        </Link>
        <Link to={'all/instractor'}>
        <MDBBtn outline color="danger"  >
            all Instructors
        </MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default StudentNav