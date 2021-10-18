import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooke/useAuth';
import "./Header.css"

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar className="w-75 mx-auto" bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    
                    <Navbar.Brand href="#home"><img className="logo-img" src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" alt="" />{'  '}<span className="fw-bold text-dar">HealthCare</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="bg-dark fw-bold text-white me-2" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="bg-dark fw-bold text-white me-2" as={Link} to="/about">About</Nav.Link>
                        
                        {

                        user.email ? <Button onClick={logOut} className="bg-dark fw-bold text-white me-2" variant="dark">Logout</Button> : <Nav.Link className="bg-dark fw-bold text-white me-2" as={Link} to="/login">Login</Nav.Link>

                        }
                        
                        {
                        user.email && <Navbar.Text>
                            LogIn: <small className="text-primary">{user.displayName}</small>
                        </Navbar.Text>
                        }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;