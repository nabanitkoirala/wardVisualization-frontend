import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const TopNavbar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"> <Navbar.Brand href="#home">EHP COVID 19 DASHBOARD</Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />


                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="me-auto ">
                        {/* <Nav.Link href="#features">SUMMARY</Nav.Link> */}
                        <Link to="/district-summary"> <Nav.Link href="#pricing">SEP SURGE ONWARD</Nav.Link></Link>
                        <Link to="/district-summary"><Nav.Link href="/district-summary"> DISTRICT SUMMARY</Nav.Link></Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <NavDropdown title="Login" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default TopNavbar;