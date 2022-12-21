import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './estilos/style.css'
function Header() {
  return (
    <Navbar className='nav-background' expand="lg">
      <Container>
        <Navbar.Brand className='nav-link' href="#home">PFDV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link' href="#s1">Inicio</Nav.Link>
            <Nav.Link className='nav-link' href="#s2">Sobre mi</Nav.Link>
            <Nav.Link className='nav-link' href="#s3">Servicios</Nav.Link>
            <Nav.Link className='nav-link' href="#s4">Conocimientos</Nav.Link>
            <Nav.Link className='nav-link' href="#s5">Contacto</Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;