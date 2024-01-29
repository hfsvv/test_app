import React from 'react'
import Carousal from '../components/carousal'
import Container from 'react-bootstrap/esm/Container'
import CountUp, { useCountUp } from 'react-countup';
import Aboutus from './aboutus';
import Counters from '../components/counters';
import Form from './form';
import Footer from './footer';
import Services from './services';


const Home = () => {
  return (
    <>
    
    <Carousal/>

    <Container>
        <div className="row">
           <Aboutus/>
          <Services/>
           <Counters/>
           <Form/>
           <Footer/>
          
        </div>
    </Container>
    </>
  )
}

export default Home