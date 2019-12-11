import React from 'react';
import {withRouter} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap';

function NavMenu (props){
  return (
    <Navbar collapseOnSelect className="nav_bar">
    <Navbar.Brand href="">
    <span><img src={require("../assets/img/logo.svg")} alt="Intugine"/></span>
      Intugine
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">Brands </Nav.Link>
        <Nav.Link href="">Transporters</Nav.Link>
        <Nav.Link href="">
          <span className="nav_profile_icon">
          <img src={require("../assets/img/profile.svg")} alt="Intugine"/>
          </span>
          </Nav.Link>
          
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default withRouter(NavMenu);