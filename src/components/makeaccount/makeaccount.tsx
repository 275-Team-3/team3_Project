import React from "react";
import { Button, Form } from "react-bootstrap";

function Makeaccount(): JSX.Element {
    return (
        <div className="login">
            <div className="login-info">
                <h2 className="header">Welcome to Account Creation Page</h2>
                <div className="forms">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="FirstName"
                            placeholder="Please enter your first name."
                        />
                        <Form.Control
                            className="forms"
                            type="LastName"
                            placeholder="Please enter your last name."
                        />
                        <Form.Control
                            className="forms"
                            type="email"
                            placeholder="Please enter your email. This will be your username."
                        />
                        <Form.Control
                            type="password"
                            placeholder="Please enter your desired password."
                        />
                    </Form.Group>
                </div>
                <div className="middle-buttons">
                    <div>
                        <Button className="button">Create Account</Button>
                    </div>
                    <div>
                        <Button>Sign in with Google</Button>
                    </div>
                </div>
                <div className="last-buttons">
                    <Button>Forgot your password?</Button>
                    <Button>Sign in as Administrator</Button>
                </div>
            </div>
        </div>
    );
}

export default Makeaccount;
