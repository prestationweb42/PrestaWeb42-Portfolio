import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../../Helpers/navLinks";
import "./NavigationBar.css";

function createLinks() {
    return navLinks.map((e, idx) => (
        <Nav.Link className="mx-2 p-2" key={idx} href={e.ref}>
            {e.nom}
        </Nav.Link>
    ));
}

function NavigationBar() {
    return (
        <div id="home">
            <Navbar expand="xl" collapseOnSelect className="navigation__container fixed-top">
                
                <Container>
                    <Navbar.Brand href="#home">Prestation Web 42</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {createLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
