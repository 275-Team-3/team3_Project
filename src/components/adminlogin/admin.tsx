import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Messi from "./messi.jpeg";
import "./admin.css";

function Admin(): JSX.Element {
    return (
        <div className="login">
            <div className="Messi">
                <img src={Messi} alt="Messi" />
            </div>
            <div className="login-info">
                <h2 className="header">Welcome to Ekin</h2>
                <h5 className="sign-in">ADMIN Sign in</h5>
                <div className="forms">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            className="forms"
                            type="text"
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
