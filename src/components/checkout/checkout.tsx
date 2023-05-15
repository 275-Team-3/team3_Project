/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cart from "../cartPage/cart";
import "./checkout.css";
// import { useNavigate } from "react-router-dom";

let defaultData: {
    Product: string;
    Price: string;
    Photo: string;
    Amount: number;
    productTotal: number;
}[] = [];
const userCartKey = "MY-PAGE-USER-CART";
const loadData = localStorage.getItem(userCartKey);
if (loadData !== null) {
    defaultData = JSON.parse(loadData);
}

function Checkout(): JSX.Element {
    // const setPath = useNavigate();
    // const [totalPrice, setTotalPrice] = useState(0);
    const setPath = useNavigate();
    const [cardNumber, setCardNumber] = useState<string | null>(null);
    const [pin, setPin] = useState<string | null>(null);

    function caculateTotal() {
        const total: number = defaultData.reduce(
            (currentTotal: number, item) =>
                currentTotal + Number(item.Amount) * Number(item.Price),
            0
        );
        return total;
        // console.log(total);
        // setTotalPrice(total);
    }
    function updateNumber(event: React.ChangeEvent<HTMLInputElement>) {
        setCardNumber(event.target.value);
    }
    function updatePin(event: React.ChangeEvent<HTMLInputElement>) {
        setPin(event.target.value);
    }
    // setTotalPrice(caculateTotal());
    return (
        <div className="checkOut">
            {caculateTotal()}
            <Container>
                <Row>
                    <Col class=".col-lg-">
                        <h2>Order Summary</h2>
                        <Cart />
                        <hr></hr>
                        <h4>TOTAL AMOUNT DUE {caculateTotal()}</h4>
                    </Col>
                    <Col class=".col-">
                        <h2>Payment Detals</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                className="forms"
                                type="product"
                                placeholder="Card Number"
                                onChange={updateNumber}
                            />
                            <Form.Control
                                className="forms"
                                type="company"
                                placeholder="3 digit pin"
                                onChange={updatePin}
                            />
                            {cardNumber !== null && pin !== null ? (
                                <Button onClick={() => setPath("/Fullfilled")}>
                                    Fullfill
                                </Button>
                            ) : null}
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Checkout;
