import React from "react";
import { Button, Form } from "react-bootstrap";
import "./admin.css";

function Admin(): JSX.Element {
    return (
        <div className="login">
            <div className="Messi">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHAvIny22NJoLBKU4UGZQAIcyB4qFb563bg&usqp=CAU" />
            </div>
            <div className="login-info">
                <h2 className="header">Welcome to Ekin</h2>
                <h5 className="sign-in">ADMIN Sign in</h5>
                <div className="forms">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="email"
                            placeholder="Email or Username"
                        />
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>
                <div className="middle-buttons">
                    <div>
                        <Button className="button">LOGIN NOW</Button>
                    </div>
                    <h6>Forgot your password?</h6>
                </div>
            </div>
        </div>
    );
}

export default Admin;
