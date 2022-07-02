import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
function NavbarList() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top'>
                <Container>
                    <div className='nav-left'>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/product">Menu</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/add">Add Product</Link>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='nav-right'>
                        <Nav className='nav-set'>
                            <Nav.Link>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link>
                            </Nav.Link>
                            <Nav.Link>Logout</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarList;