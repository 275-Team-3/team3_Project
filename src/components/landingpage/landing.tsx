import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./landingstyles.css";
import Productview from "../productview/productview";
/* eslint-disable no-extra-parens */
let defaultData = [
    {
        Product: "Nike mercury ",
        Description: "nike mercury 12 limited edition",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/503e9eea-02dd-4f8f-91e3-6ad74a9225cc/quest-5-mens-road-running-shoes-1tmPXN.png"
    },
    {
        Product: "Nike mercury3",
        Description: "nike mercury 13 limited edition",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        Product: "Nike Air ZOOM",
        Description: "nike Air ZOOM",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://media.istockphoto.com/id/1320786676/photo/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-trainer-on-orange.jpg?s=170667a&w=0&k=20&c=DuOyE_MjpgEmenP0GPOVffO7-Y1J-F9hL-aJ5w4wI84="
    },
    {
        Product: "C.RONALDO JERSEY",
        Description: "Nike C. RONALDO Portugal Jersey",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/504a9a69-9b64-411b-8673-2c917e55959f/portugal-national-team-2022-23-stadium-home-cristiano-ronaldo-mens-dri-fit-soccer-jersey-xBK2l8.png"
    },
    {
        Product: "L.Messi Jersey",
        Description: "L. Messi PSG Jersey",
        Price: "200",
        Stock: "94",
        Brand: "nike",
        Photo: "https://m.media-amazon.com/images/I/51ThXwpW4lL._AC_UY1000_.jpg"
    }
];

const saveDataKey = "MY-PAGE-INVE-1";

// Check if the user's data already exists
const loadData = localStorage.getItem(saveDataKey);
if (loadData !== null) {
    defaultData = JSON.parse(loadData);
}

const splitArr = (
    arr: {
        Product: string;
        Description: string;
        Price: string;
        Stock: string;
        Brand: string;
        Photo: string;
    }[],
    size: number
) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
        arr.slice(i * size, i * size + size)
    );

const splitted = splitArr(defaultData, 3);
console.log(splitted);

function Landing(): JSX.Element {
    const [isclick, setclick] = useState(false);
    const [productDisplay, setProductDisplay] = useState<{
        Product: string;
        Description: string;
        Price: string;
        Photo: string;
    }>({ Product: "", Description: "", Price: "", Photo: "" });

    function updateStates(
        product: string,
        description: string,
        price: string,
        photo: string
    ) {
        setclick(!isclick);
        setProductDisplay({
            Product: product,
            Description: description,
            Price: price,
            Photo: photo
        });
    }
    // make carousel x times, in those carousels, the items will be the ones inside all inside a larger carousel
    return (
        <div>
            <h1 className="landing-title">Shop All</h1>

            {splitted.map((item, index) => (
                <Carousel
                    className="carousel-wrapper"
                    data-testid="carousel"
                    key={index}
                >
                    <Carousel.Item className="carousel-items" key={index}>
                        <Stack
                            className="h-100 justify-content-center align-items-center"
                            direction="horizontal"
                            gap={4}
                            key={index}
                        >
                            {item.map((element) => (
                                <Card
                                    className="card"
                                    key={element.Product}
                                    data-testid={"card" + element.Product}
                                >
                                    <div className="card-img-wrapper">
                                        <Card.Img
                                            className="card-img"
                                            src={element.Photo}
                                        />
                                        <div
                                            className="overlay"
                                            data-testid={
                                                "overlay" + element.Product
                                            }
                                        >
                                            <Button
                                                className="buy-btn"
                                                data-testid={
                                                    "buy-btn" + element.Product
                                                }
                                                variant="light"
                                                onClick={() =>
                                                    updateStates(
                                                        element.Product,
                                                        element.Description,
                                                        element.Price,
                                                        element.Photo
                                                    )
                                                }
                                            >
                                                PRODUCT VIEW
                                            </Button>
                                        </div>
                                    </div>
                                    <Card.Body className="card-details">
                                        <Card.Text className="product-type">
                                            <a>{element.Description}</a>
                                        </Card.Text>
                                        <Card.Text className="product-price">
                                            {element.Price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Stack>
                    </Carousel.Item>
                </Carousel>
            ))}
            {isclick == true ? (
                // productDisplay
                <div data-testId={"pview" + productDisplay.Product}>
                    <Productview
                        name={productDisplay.Product}
                        price={productDisplay.Price}
                        imge={productDisplay.Photo}
                        description={productDisplay.Description}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default Landing;
