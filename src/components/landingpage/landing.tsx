/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Section from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//import Carousel from "react-bootstrap/Carousel";
import "./landingstyles.css";

import img7 from "./lp_images/7.jpg";
import img8 from "./lp_images/8.jpg";
import img9 from "./lp_images/9.jpg";
import Productview from "../productview/productview";
import * as productJson from "../products.json";

function Landing(): JSX.Element {
    const [isclick, setclick] = useState(false);
    return (
        <div>
            <h1 className="landing-title">Shop All</h1>
            <Section className="products">
                <Card className="card">
                    <div className="card-img-wrapper">
                        <Card.Img className="card-img" src={img7} />
                        <div className="overlay">
                            <Button
                                className="buy-btn"
                                variant="light"
                                onClick={() => setclick(!isclick)}
                            >
                                PRODUCT VIEW TEST BUTTON
                            </Button>
                        </div>
                    </div>
                    <Card.Body className="card-details">
                        <Card.Text className="product-type">
                            <a>Los Angeles Lakers LeBron James Gold Jersey</a>
                        </Card.Text>
                        <Card.Text className="product-price">$110</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <div className="card-img-wrapper">
                        <Card.Img className="card-img" src={img8} />
                        <div className="overlay">
                            <Button className="buy-btn" variant="light">
                                Buy Now!
                            </Button>
                        </div>
                    </div>
                    <Card.Body className="card-details">
                        <Card.Text className="product-type">
                            <a>Stephen Curry Nike Swingman Jersey</a>
                        </Card.Text>
                        <Card.Text className="product-price">$150</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <div className="card-img-wrapper">
                        <Card.Img className="card-img" src={img9} />
                        <div className="overlay">
                            <Button className="buy-btn" variant="light">
                                Buy Now!
                            </Button>
                        </div>
                    </div>
                    <Card.Body className="card-details">
                        <Card.Text className="product-type">
                            <a>Giannis Antetokounmpo Hunter Green Jersey</a>
                        </Card.Text>
                        <Card.Text className="product-price">$120</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <div className="card-img-wrapper">
                        <Card.Img className="card-img" src={img9} />
                        <div className="overlay">
                            <Button className="buy-btn" variant="light">
                                Buy Now!
                            </Button>
                        </div>
                    </div>
                    <Card.Body className="card-details">
                        <Card.Text className="product-type">
                            <a>Giannis Antetokounmpo Hunter Green Jersey</a>
                        </Card.Text>
                        <Card.Text className="product-price">$120</Card.Text>
                    </Card.Body>
                </Card>
            </Section>
            {isclick == true ? (
                <Productview name="bobs" price={44} imge={img7} />
            ) : null}
        </div>
    );
}

export default Landing;
