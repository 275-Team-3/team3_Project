import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Messi from "./messi.jpeg";
import "./admin.css";
import adminUser from "../adminlogin/userlogin.json";

function Admin(): JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Finds admin with the matching username and password
        const admin = adminUser.find(
            (admin) =>
                admin.username === username && admin.password === password
        );

        if (admin) {
            // If user is found in json file send them to inventory page
            window.location.href = "../admininventory";
        } else {
            // If user is not found, display an error message
            alert("Invalid username or password");
        }
    };

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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className="middle-buttons">
                    <div>
                        <Button className="button" onClick={handleLogin}>
                            LOGIN NOW
                        </Button>
                    </div>
                    <h6>Forgot your password?</h6>
                </div>
            </div>
        </div>
    );
}

export default Admin;
