import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooke/useAuth';

const Login = () => {
    const {signInUsingGoogle, signInWithPassword, logInWithPassword} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNotLogin, setIsNotlogin] = useState(false);
    // const location = useLocation();
    // const history = useHistory();
    const toggleLogin = e =>{
        setIsNotlogin(e.target.checked);
    }
    const handelEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handelPasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handelRegistration = e =>{
        console.log(email, password);
        signInWithPassword(email,password);
        e.preventDefault(); 
    }
    const handelLogin = e =>{
        console.log(email, password);
        logInWithPassword(email,password);
        e.preventDefault(); 
    }

    return (
        <div >
            <div>
            <Form className="w-25 mx-auto mt-5">
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <h2>{ isNotLogin? "Registration First" : "Loging Now"  }</h2>
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handelEmailChange} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handelPasswordChange} type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                
                <Form.Group onChange={toggleLogin} as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 2, offset: 2 }}>
                    <Form.Check label="New?"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="my-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                    {
                    isNotLogin? <Button onClick={handelRegistration}>Register</Button> : <Button onClick={handelLogin}>Login</Button> }
                    </Col>
                </Form.Group>
            </Form>

            </div>
            
            
            <p>-----------OR-----------</p>
            <button className="btn btn-primary mb-3" onClick={signInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;