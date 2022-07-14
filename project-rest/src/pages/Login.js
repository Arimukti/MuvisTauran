import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./Login.css";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/actions/productAction';


function Login() {
    const dispatch = useDispatch();
    const { isLogin } = useSelector((state) => state.ProductReducer);
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    function loginHandler(event) {
        event.preventDefault();
        dispatch(loginUser({ username: login.username, password: login.password }));
        navigate('/');
    }


    return (
        <div className='formLogin'>
            <p id="log">Login with your account</p>
            <Form className="align-items-center">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control className="text-center" type="text" value={login.username} placeholder="Type your name" onChange={(e) => setLogin((state) => ({ ...state, username: e.target.value }))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Control className="text-center" type="password" value={login.password} placeholder="************" onChange={(e) => setLogin((state) => ({ ...state, password: e.target.value }))} />
                </Form.Group>
                <Button variant="primary" type='submit' className='btn-login' onClick={loginHandler}>Login</Button>
            </Form>
        </div>
    );
}

export default Login;