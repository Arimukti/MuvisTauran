import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../../store/actions/productAction';
import './Navbar.css';
import muvis from '../brand-muvis.png';
function Navbar() {
    const { isLogin } = useSelector((state) => state.ProductReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLog = () => {
        if (isLogin) {
            localStorage.clear();
            dispatch(logoutUser());
            navigate('/');
        } else {
            navigate("/login");
        }
    };
    const handleLogout = () => {
        localStorage.clear();
        dispatch(logoutUser());
        navigate('/');
    };
    return (
        <div className="navbar">
            <div className="brand">
                <Link to="/">
                    <img src={muvis} alt="" />
                </Link>
            </div>
            <div className='menu-list'>
                <ul>
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/product">Menu</Link></a></li>
                    <li><a><Link to="/add">Add Product</Link></a></li>
                    <li><a onClick={handleLog}><Link to="">{isLogin !== null ? "Logout" : "Login"}</Link></a></li>
                </ul>
            </div>
        </div>
    );
}


export default Navbar;