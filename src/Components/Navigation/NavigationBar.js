import React from "react";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { navLinks } from "../../Helpers/navLinks";
import { subLinks } from "../../Helpers/subLinks";

function createLinks() {
    return navLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>
            {e.nom}
        </Nav.Link>
    ));
}

function createSubLinks() {
    return subLinks.map(
        (e, idx) => (
            <NavDropdown.Item key={idx} href={e.ref}>
                {e.nom}
            </NavDropdown.Item>
        ),
        (<NavDropdown.Divider />)
    );
}

function NavigationBar() {
    return (
        <div id="home">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {createLinks()}
                            <NavDropdown
                                title="Dropdown"
                                id="basic-nav-dropdown"
                            >
                                {createSubLinks()}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
