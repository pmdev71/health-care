import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooke/useAuth';

const Login = () => {
    const {signInUsingGoogle, signInWithPassword} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <div>
            <Form onSubmit={handelRegistration} className="w-25 mx-auto">
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

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 8, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
            
            <h3>-----------OR-----------</h3>
            <button className="btn btn-primary" onClick={signInUsingGoogle}>Google SignIn</button>
        </div>
    );
};

export default Login;