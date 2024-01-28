import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"  fixed="top">
      <Container>
        <Navbar.Brand href="#home">Baitullah Projects</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
		  <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">What we do</Nav.Link>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">abc</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
};

export default NavBar;