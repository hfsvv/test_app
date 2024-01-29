import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
	return (
    <>
    <div className="container-fluid">
      <div className="container-data">
        <div>
    <FontAwesomeIcon icon={faPhone} />
    <a className='px-1' href="tel:042503526">042503526</a>

        </div>
        <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <a className='px-1' href="mailto:aliasarwar44@gmail.com">
          aliasarwar44@gmail.com
          </a>
        </div>
        <div>
        </div>
      </div>
    </div>
		<Navbar collapseOnSelect expand="lg"  variant="dark"  sticky="top">
      <Container>
        <Navbar.Brand className='nav-head' href="#home">Baitullah Projects</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
		  <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>

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