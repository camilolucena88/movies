import React, {FormEvent, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {Button, Form, Nav} from "react-bootstrap";
import login from "../../services/auth/login";
import {useSelector} from "react-redux";
import {Store} from "../../store/types";

function Login() {
    
    const signIn = (event : FormEvent) => {
        event.preventDefault()
        login({username, password})
    }
    const access_token = useSelector((state: Store) => state.token.access_token)
    const loggedUser = useSelector((state: Store) => state.user.username)

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div>
            <Layout>
                    {
                        access_token === '' ?
                            <div className="container">
                                <h2>Login page</h2>
                                <Form onSubmit={(event: FormEvent) => signIn(event)}>
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
                            </div> :
                            <div className="container">
                                Welcome, {loggedUser}
                            </div>
                    }
            </Layout>
        </div>
    )
}

export default Login;