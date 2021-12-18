import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
import {HashLink} from 'react-router-hash-link';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <>
            <Navbar className="ps-0 bg-light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold nav-logo" href="#home"><img src={logo} width="60px" alt=""/></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="nav-color" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-color" to="/home#bonsai">Bonsai</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-color" to="/home#arrival">Arrivals</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-color" to="/home#offers">Offers</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} className="nav-color" to="/dashboard">Dashboard</Nav.Link>

                        {user?.email ? 
                            <button onClick={logout} className="btn btn-warning"><i className="fas fa-sign-out-alt"></i> Logout</button>:
                            <Nav.Link as={Link} className="nav-color" to="/login">
                                <button className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Login</button>
                            </Nav.Link>
                        }

                        <Navbar.Text className="text-white ms-3 mt-2">
                            <h6 className="user-name">{user.displayName}</h6>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;