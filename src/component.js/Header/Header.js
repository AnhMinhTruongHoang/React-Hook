import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Service/apiServices";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/userAction";

const Header = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);   /// lay data ve tu redux
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handerLogin = () => {
    navigate("/Login");
  };

  const handerLogOut = async() => {
     let rs = await logout(account.email, account.refresh_token)
      if(rs && rs.EC === 0){
        dispatch(doLogout())
        navigate('/Login')
      }
      else{
        toast.error(rs.EM);
      }
     
     
    }

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
            {isAuthenticated === false ? (
              <>
                <button className="btn-login" onClick={() => handerLogin()}>
                  Login
                </button>

                <button className="btn-sighup" onClick={() => handerSigtUp()}>
                  Sign up
                </button>
              </>
            ) : (
              <NavDropdown title="Settings" id="basic-nav-dropdown">

                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handerLogOut()}>Log out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

