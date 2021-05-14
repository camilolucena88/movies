import React, {FormEvent, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

function Login() {
    const login = (event: FormEvent) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/token/obtain/', {
            username: username,
            password: password,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div>
            <Layout>
                <h2>Login page</h2>
                <div className="container">
                    <Form onSubmit={(event) => login(event)}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username"
                                          onChange={(event) => setUsername(event.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={(event) => setPassword(event.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Layout>
        </div>
    )
}

export default Login;