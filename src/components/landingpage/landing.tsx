/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./landingstyles.css";

import img1 from "./lp_images/1.jpg";
import img2 from "./lp_images/2.jpg";
import img3 from "./lp_images/3.jpg";
import img4 from "./lp_images/4.jpg";
import img5 from "./lp_images/5.jpg";
import img6 from "./lp_images/6.jpg";
import img7 from "./lp_images/7.jpg";
import img8 from "./lp_images/8.jpg";
import img9 from "./lp_images/9.jpg";
import img10 from "./lp_images/10.jpg";
import img11 from "./lp_images/11.jpg";
import img12 from "./lp_images/12.jpg";
import img13 from "./lp_images/13.jpg";
import img14 from "./lp_images/14.jpg";
import img15 from "./lp_images/15.jpg";
import img16 from "./lp_images/16.jpg";
import img17 from "./lp_images/17.jpg";
import img18 from "./lp_images/18.jpg";
import Productview from "../productview/productview";
function Landing(): JSX.Element {
    const [isclick, setclick] = useState(false);
    return (
        <div>
            <h1 className="landing-title">Shop All</h1>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
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
                                    <a>
                                        Los Angeles Lakers LeBron James Gold
                                        Jersey
                                    </a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $110
                                </Card.Text>
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
                                <Card.Text className="product-price">
                                    $150
                                </Card.Text>
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
                                    <a>
                                        Giannis Antetokounmpo Hunter Green
                                        Jersey
                                    </a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $120
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img10} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>
                                        Mbappé Paris Saint-Germain Soccer Jersey
                                    </a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $145
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img11} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Al Nassr Ronaldo Home Jersey</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $7
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img12} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>adidas Argentina Lionel Messi Jersey</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $150
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img1} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Luka 1</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $110
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img2} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Zoom Freak 4</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $130
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img3} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Giannis Immortality 2</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $85
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img4} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Lebron Witness 6</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $90
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img5} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Air Jordan XXXVII SP</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $140
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img6} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Nike Renew Elevate 3</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $70
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>
            <Carousel className="carousel-wrapper">
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img13} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Mountain Bike</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $299.99
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img14} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Everlast Boxing Gloves</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $69.99
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img15} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Nike Vapor Football Gloves</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $50.00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
                <Carousel.Item className="carousel-items">
                    <Stack
                        className="h-100 justify-content-center align-items-center"
                        direction="horizontal"
                        gap={3}
                    >
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img16} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Arm Sleeve</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img17} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>adidas Knee Pads </a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $30.00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card">
                            <div className="card-img-wrapper">
                                <Card.Img className="card-img" src={img18} />
                                <div className="overlay">
                                    <Button className="buy-btn" variant="light">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                            <Card.Body className="card-details">
                                <Card.Text className="product-type">
                                    <a>Tennis Racquet</a>
                                </Card.Text>
                                <Card.Text className="product-price">
                                    $24.99
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                </Carousel.Item>
            </Carousel>
            {isclick == true ? (
                <Productview name="bobs" price={44} imge={img7} />
            ) : null}
        </div>
    );
}

export default Landing;
