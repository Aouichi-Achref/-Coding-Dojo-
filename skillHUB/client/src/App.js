import {Routes,Route, Link, Navigate} from 'react-router-dom'
import Instractor from './components/Instractor/Instractor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import{Container} from 'react-bootstrap'
import LandingPage from './components/landingPage/LandingPage';
import "./assets/bootstrap.min.css";
import 'boxicons'
import Admin from './components/Admin/Admin';
import Student from './components/Student/Student';
import LogReg from './components/LogReg/LogReg';
import Aboutus from './components/AboutUs/Aboutus';
import ContactUs from './components/Contact/Contact';



function App() {
  return (
    <>
    <Header/>
      <main style={{padding:"25px"
        ,backgroundImage:"url(https://media.istockphoto.com/id/1173604114/vector/e-learning-online-courses-icons-pattern.jpg?s=2048x2048&w=is&k=20&c=R0eEYgk4t2vyg99TeIlBRwU4m27VBwbnewDN-HYb300=)"}} >
      {/* VISITOR */}
      <Routes >
        <Route path='/' element={<Navigate to={'/Home'}/>}/>
        <Route path='/Home' element={<LandingPage/>}/>
        <Route path='/Home/*' element={<><LogReg/></>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      {/* Instractor*/}
      <Routes >
        <Route path='/instractor/*' element={<Instractor/>}/>
      </Routes>
      {/* Admin*/}
      <Routes >
        <Route path='/Admin/*' element={<><Admin/></>}/>
      </Routes>
      {/* Student*/}
      <Routes >
        <Route path='/Student/*' element={<><Student/></>}/>
      </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
