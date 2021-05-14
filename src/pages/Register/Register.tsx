import React, {FormEvent, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {Button, Form} from "react-bootstrap";
import useFetch from "../../store/useFetch";
import axios from "axios";

function Register() {

    
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [first_name, setFirstName] = useState<string>('')
    const [last_name, setLastName] = useState<string>('')
    
    const register = (event : FormEvent) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/register/',{
                username: username,
                password: password,
                password2: password2,
                email: email,
                first_name: first_name,
                last_name: last_name,
            },{
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

    return (
        <div>
            <Layout>
                <h2>Signup page</h2>
                <div className="container">
                    <Form onSubmit={(event) => register(event)}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          onChange={(event) => setPassword(event.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Password2 </Form.Label>
                            <Form.Control type="password" placeholder="Password2"
                                          onChange={(event) => setPassword2(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                          onChange={(event) => setEmail(event.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>First name </Form.Label>
                            <Form.Control type="text" placeholder="First name"
                                          onChange={(event) => setFirstName(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Last name </Form.Label>
                            <Form.Control type="text" placeholder="Last name"
                                          onChange={(event) => setLastName(event.target.value)}/>
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

export default Register;