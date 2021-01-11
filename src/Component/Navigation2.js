import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Nav_Icon from '../Assets/plant.svg';
import '../Css/Navigation.css'
import {NavLink} from 'react-router-dom';
function Navigation_Bar() {
    return (
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                    <img className="nav_icon pr-2" src={Nav_Icon} alt=""/>
                        MediAssist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/add">Add</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation_Bar;
