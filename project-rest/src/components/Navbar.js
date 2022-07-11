import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getListProduct, logoutUser } from '../actions/productAction';
import Home from '../pages/Home';
import './Navbar.css';
import muvis from './brand-muvis.png';
function NavbarList() {
    const { isLogin } = useSelector((state) => state.ProductReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.clear();
        dispatch(logoutUser());
        navigate('/');
        // dispatch(getListProduct());
    };
    // useEffect(() => {
    //     if (isLogin === null) {
    //         dispatch(getListProduct());
    //     }
    // }, [isLogin, dispatch]);
    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top'>
                <div className='container'>
                    <Navbar.Brand id='brand-img'><Link to="/" style={{ textDecoration: 'none' }}><img src={muvis} /></Link></Navbar.Brand>
                    <div className='nav-left'>
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className='nav-text' style={{ textDecoration: 'none', color: 'white' }} to="/product">Menu</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-text' style={{ textDecoration: 'none', color: 'white' }} to="/add">Add Product</Link>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className='nav-right'>
                        <Nav className='nav-set'>
                            <Nav.Link className='nav-text'>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">{isLogin === null ? "Login" : ""}</Link>
                            </Nav.Link>
                            <Nav.Link className='nav-text' onClick={handleLogout}>
                                {isLogin === null ? "" : "Logout"}
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
            </Navbar>
        </>
    );
}

export default NavbarList;