import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
      <Container>
       <Link to={'/'}><Navbar.Brand href="#offers">Food Truck</Navbar.Brand></Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-dark">
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
