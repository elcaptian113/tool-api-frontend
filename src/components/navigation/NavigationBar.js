import './NavigationBar.css';

import React from 'react';
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return(
        <div className='navigation-bar'>
            <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                 <Container fluid>
                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                 <Navbar.Brand as={Link} to="/">Tool API</Navbar.Brand>
                 <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="start"
                 >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tool API
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/add">Add Tool</Nav.Link>
                    <Nav.Link as={Link} to="/updatePage">Update Tool</Nav.Link>
                    <Nav.Link as={Link} to="/delete">Delete Tool</Nav.Link>
                </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        </>
        </div>
    )
}

export default NavigationBar;