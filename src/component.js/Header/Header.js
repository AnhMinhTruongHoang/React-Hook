import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handerLogin = () => {
    navigate("/Login");
  };

  const handerSigtUp = () => {
    navigate("/Resgisterss");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Anh Minh Web</Navbar.Brand> */}
        <NavLink to="/" activeClassName="active" className="navbar-brand">
          Anh Minh
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              Admins
            </NavLink>
          </Nav>

          <Nav>
            <button className="btn-login" onClick={() => handerLogin()}>
              {" "}
              Login{" "}
            </button>

            <button className="btn-sighup" onClick={() => handerSigtUp()}>
              {" "}
              Sign up{" "}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
