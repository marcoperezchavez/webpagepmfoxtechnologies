import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PMFOXTECHNOLOGIESLOGO  from '../../Images/PMFOXTECHNOLOGIESLOGO.png'
import './navBar.scss';
import React from 'react';


const MyNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar-container'>
      <Container className='container-navBar'>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={PMFOXTECHNOLOGIESLOGO}
              width="50"
              height="50"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Brand href="#home">
            PMFOX TECHNOLOGIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">CVs</Nav.Link>
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Javascript</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Angular
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">React JS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">C#</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SQL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ALL COURSES
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Examples Code</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#YouTube">YouTube</Nav.Link>
            <Nav.Link href="#TikTok">Tik Tok</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;