import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logos from "./logo192.png";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="no-border " bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand ">
              <img alt="DeepEquilibrium" src={logos} className="logo"></img>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto nav-font-size-2">
              <Nav.Link href="/">Home</Nav.Link>

              <NavDropdown title="Physics" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="/#t_pyclass"
                  className="nav-font-size-2"
                >
                  Physics Courses
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="nav-font-size-2"
                >
                  Path to USAPHO
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="nav-font-size-2"
                >
                  Simulator
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Math" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="/#t_mathclass"
                  className="nav-font-size-2"
                >
                  MATH COURSES
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto nav-font-size">
              <LinkContainer to="/login">
                <Nav.Link className="nav-font-size-2">
                  <i className="fas fa-user "></i>Sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
