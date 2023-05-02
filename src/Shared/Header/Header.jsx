import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Chef Hunter</Navbar.Brand>
                    <Nav className="ms-auto web-navbar">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;