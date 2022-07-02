import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./Login.css";


function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    function loginHandler(event) {
        event.preventDefault();
        if (login.username !== '' && login.password === "12345") {
            navigate('/');
        }
    }

    return (
        <div className='formLogin'>
            <p id="log">Login with your account</p>
            <Form onClick={loginHandler} className="align-items-center">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="text-center" type="text" value={login.username} placeholder="Type your name" onChange={(e) => setLogin((state) => ({ ...state, username: e.target.value }))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="text-center" type="password" value={login.password} placeholder="************" onChange={(e) => setLogin((state) => ({ ...state, password: e.target.value }))} />
                </Form.Group>
                <Button variant="primary" type='submit' >Login</Button>
            </Form>
        </div>
    );
}

export default Login;