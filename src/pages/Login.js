import React, {useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from "../context/auth";


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthTokens} = useAuth();


    async function postLogin() {
        const response = await fetch('api/login', {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userName, password: password }),
                });
        let responseBody = await response.json();
        console.log(responseBody.body);
    }


    if (isLoggedIn) {
        return <Redirect to={'/home'}/>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      value={userName}
                                      onChange={e => {
                                          setUserName(e.target.value);
                                      }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      value={password}
                                      onChange={e => {
                                          setPassword(e.target.value);
                                      }}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Link to="/register">Don't have an account?</Link>
                    {isError && <div>The username or password provided were incorrect!</div>}
                    <Button onClick={postLogin} variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}

export default Login;