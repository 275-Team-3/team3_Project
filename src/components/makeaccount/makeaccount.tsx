import React, { useState } from "react";
import "./makeaccount.css";
import { Button, Form } from "react-bootstrap";
import { AccountData, Accounts } from "./accounts";
import UserIcon from "../userIcon";

function Makeaccount(): JSX.Element {
    <>
        <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
        ></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </>;

    <>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script></script>
    </>;

    const [account, setAccountData] = useState<Accounts[]>(AccountData);
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
            <Button className="button">
                UPDATE onClick=
                {() => {
                    setAccountData([
                        ...account,
                        {
                            title: "name",
                            description: "product",
                            price: 13,
                            stock: 13,
                            brand: "nike",
                            category: "shoes",
                            image: "url"
                        }
                    ]);
                }}
            </Button>
        </div>
    );
}

export default Makeaccount;
