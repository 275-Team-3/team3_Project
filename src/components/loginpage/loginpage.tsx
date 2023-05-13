/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Ronaldo from "./r7.jpg";
import "./loginpage.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/messaging";
import "firebase/compat/firestore";
import adminUser from "../adminlogin/userlogin.json";

function Login(): JSX.Element {
    // const [user, setUser] = useState(true);
    const [usera, setUser] = useState<string>("");
    const [useraimg, setUseraImg] = useState<string>("");
    firebase.initializeApp({
        apiKey: "AIzaSyDuuO3Qvj_guTliM6iPgV3_5dF0OWOLi-0",
        authDomain: "proj-15d75.firebaseapp.com",
        projectId: "proj-15d75",
        storageBucket: "proj-15d75.appspot.com",
        messagingSenderId: "1096734466692",
        appId: "1:1096734466692:web:c7cbf5f3fd67c3bf7c58d1",
        measurementId: "G-WWLTRVX79F"
    });
    const authenticate = firebase.auth();
    const authenticationService = new firebase.auth.GoogleAuthProvider();

    const signInBox = () => {
        authenticate.signInWithPopup(authenticationService);
        const user = firebase.auth().currentUser;
        if (user?.displayName != null) {
            setUser(user.displayName);
        }
        if (user?.photoURL != null) {
            setUseraImg(user.photoURL);
        }
        console.log(user);
    };

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
            window.location.href = "../landing";
        } else {
            // If user is not found, display an error message
            alert("Invalid username or password");
        }
    };
    return (
        <div className="login">
            <div className="login">
                <img src={Ronaldo} />
            </div>
            <div className="login-info">
                <h2 className="header">Welcome to Ekin {usera}</h2>
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
                    <div>
                        <Button onClick={signInBox}>Sign in with Google</Button>
                    </div>
                </div>
                <div className="last-buttons">
                    <Button>Make account</Button>
                    <Button>Log in as Admin</Button>
                </div>
            </div>
            <h2>
                <img src={useraimg} alt="" />
            </h2>
        </div>
    );
}

export default Login;
