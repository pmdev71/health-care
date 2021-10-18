import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooke/useAuth';

const Login = () => {
    const {signInUsingGoogle, signInWithPassword} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const location = useLocation();
    // const history = useHistory();

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

    return (
        <div >
            <Form onSubmit={handelRegistration} className="w-25 mx-auto mt-5">
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
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
                
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 2, offset: 2 }}>
                    <Form.Check label="Remember" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="my-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
            
            <p>-----------OR-----------</p>
            <button className="btn btn-primary mb-3" onClick={signInUsingGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;