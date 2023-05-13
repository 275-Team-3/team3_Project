import React, { useState } from "react";
import "./makeaccount.css";
import { Button, Form } from "react-bootstrap";
import UserIcon from "../userIcon";

function Makeaccount(): JSX.Element {
    return (
        <div className="App">
            <div className="profile">
                <UserIcon />
            </div>
            <div className="forms">
                <Form.Group>
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
            <Button className="button">UPDATE onClick</Button>
        </div>
    );
}

export default Makeaccount;
