import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink,active } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Anh Minh Web</Navbar.Brand> */}
        <NavLink to="/" activeClassName="active"  className="navbar-brand">Anh Minh</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" activeClassName="active"  className="nav-link">Home</NavLink>
            <NavLink to="/users" activeClassName="active" className="nav-link">Users</NavLink>
            <NavLink to="/admins" activeClassName="active" className="nav-link">Admins</NavLink>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item >Login</NavDropdown.Item>
              <NavDropdown.Item >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
