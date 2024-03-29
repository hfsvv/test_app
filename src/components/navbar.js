import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'

const NavBar = ({scrollCall ,scrollService,scrollAboutUs}) => {
  const scrollToContact = () =>{
    console.log("works");
    scrollCall()
  }
  const serviceScroll= ()=>{
    scrollService()
  }
  const abouUsScroll= ()=>{
    scrollAboutUs()
  }
  

	return (
    <>
    <div className="container-fluid">
      <div className="container-data">
        {/* <div>
    <FontAwesomeIcon icon={faPhone} />
    <a className='px-1' href="tel:042503526">042503526</a>

        </div> */}
        <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <a className='px-1' href="mailto:contact@baitullahprojects.com">
        contact@baitullahprojects.com
          </a>
        </div>
        <div>
        </div>
      </div>
    </div>
		<Navbar collapseOnSelect expand="lg"  variant="dark"  sticky="top">
      <Container className="navbar-container">
        <Navbar.Brand className='nav-head' href="#home">
          <img className='logo' src={logo} alt=""  height={60} />
          Baitullah Projects</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
		  <Nav.Link onClick={abouUsScroll}>About Us</Nav.Link>
            <Nav.Link onClick={serviceScroll}>Services</Nav.Link>
            <Nav.Link onClick={scrollToContact}>Contact Us</Nav.Link>

            {/* <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">abc</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
	);
};

export default NavBar;