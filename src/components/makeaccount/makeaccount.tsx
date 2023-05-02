import React from "react";
import "./makeaccount.css";
import { Button, Form } from "react-bootstrap";
import UserIcon from "../userIcon";
import avatar from "./avatar.png";

function Makeaccount(): JSX.Element {
    return (
        <div className="App">
            <div className="profile">
                <UserIcon />
            </div>
            <div className="forms">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Please Enter Email"
                    />
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Name"
                    />
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Qualities"
                    />
                    <Form.Control
                        className="forms"
                        type="email"
                        placeholder="Age"
                    />
                </Form.Group>
            </div>
            <Button className="button">UPDATE</Button>
        </div>
    );
}

export default Makeaccount;
