import React from 'react'
import Carousal from '../components/carousal'
import Container from 'react-bootstrap/esm/Container'
import Aboutus from './aboutus';
import Counters from '../components/counters';
import Form from './form';
import Footer from './footer';
import Services from './services';


const Home = ({childRef,serviceRef,aboutUsRef}) => {
  return (
    <>
    {/* <div className="ss"  onClick={()=>console.log(childRef)}>aa</div> */}
    <Carousal  />

    <Container>
        <div className="row">
           <Aboutus childRef = {aboutUsRef}/>
          <Services childRef = {serviceRef}/>
           <Counters/>
           <Form childRef={childRef}/>
           <Footer/>
          
        </div>
    </Container>
    </>
  )
}

export default Home