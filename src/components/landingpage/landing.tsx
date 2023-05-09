/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Section from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./landingstyles.css";

import Productview from "../productview/productview";
import productJson from "./products.json";

function Landing(): JSX.Element {
    const [isclick, setclick] = useState(false);
    return (
        <div>
            <h1 className="landing-title">Shop All</h1>
            <Section className="products">
                {productJson.map((product) => (
                    <Card className="card" key={product.product_num}>
                        <div className="card-img-wrapper">
                            <Card.Img
                                className="card-img"
                                src={product.image}
                            />
                            <div className="overlay">
                                <Button
                                    className="buy-btn"
                                    variant="light"
                                    onClick={() => setclick(!isclick)}
                                >
                                    TEST HERE
                                </Button>
                            </div>
                        </div>
                        <Card.Body className="card-details">
                            <Card.Text className="product-type">
                                <a>{product.title}</a>
                            </Card.Text>
                            <Card.Text className="product-price">
                                ${product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Section>
            {isclick == true
                ? productJson.map((product) => (
                      <Productview
                          key={"button" + product.product_num}
                          name={product.title}
                          price={product.price}
                          imge={product.image}
                      />
                  ))
                : null}
        </div>
    );
}

export default Landing;
