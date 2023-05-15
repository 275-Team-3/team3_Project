/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Section from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./landingstyles.css";

import Productview from "../productview/productview";
//import productJson from "./products.json";

let defaultData = [
    {
        product: "Nike Air Jordan Luka 1",
        description: "Mint Foam/Racer Pink-Court Purple",
        price: 110,
        stock: 94,
        brand: "nike",
        category: "shoes",
        product_num: 1,
        image: "https://cdn.afew-store.com/assets/38/385390/1200/air-jordan-luka-1-mint-foam-racer-pink-court-purple-dn1772-305-footwear%20%3E%20sneaker-packshots-120.jpg"
    },
    {
        product: "Nike Zoom Freak 4",
        description: "Pale Vanilla/Coral Chalk/Blue Lightning",
        price: 130,
        stock: 94,
        brand: "nike",
        category: "shoes",
        product_num: 2,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/11b85687-bfad-4a16-b8af-d0e4d1fef45b/zoom-freak-4-basketball-shoes-dsLlqf.png"
    },
    {
        product: "Nike Giannis Immortality 2",
        description: "Cobblestone/Ironstone/Magic Ember/Black",
        price: 85,
        stock: 94,
        brand: "nike",
        category: "shoes",
        product_num: 3,
        image: "https://i.ebayimg.com/images/g/nXoAAOSwRVlkDsqR/s-l1600.jpg"
    },
    {
        product: "Nike LeBron Witness 6",
        description: "Game Royal Blue/White",
        price: 105,
        stock: 94,
        brand: "nike",
        category: "shoes",
        product_num: 4,
        image: "https://classic.cdn.media.amplience.net/i/hibbett/4118F_4000_main2"
    },
    {
        product: "Nike Air Jordan XXXVII SP",
        description: "Oil Green/Orange Horizon/Twilight Marsh/Black",
        price: 210,
        stock: 94,
        brand: "nike",
        category: "shoes",
        product_num: 5,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dcfe60fb-ec1a-4662-a185-5128ec909efc/air-jordan-xxxvii-sp-basketball-shoes-wBVPdr.png"
    },
    {
        product: "Nike Renew Elevate 3",
        description: "Black/Midnight Navy/White/Volt",
        price: 74,
        stock: 94,
        brand: "nike",
        category: "shoes",
        product_num: 6,
        image: "https://static.nike.com/a/images/t_default/9c1f183c-0705-4066-9db1-c26f449b7e5e/renew-elevate-3-basketball-shoes-QT43Gj.png"
    },
    {
        product: "Nike Lebron James Jersey",
        description: "Gold/LA Lakers",
        price: 120,
        stock: 94,
        brand: "nike",
        category: "jersey",
        product_num: 7,
        image: "https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-authentic-jersey-lebron-james-mens_ss4_p-12001784+u-ecg1nylf7qjwyucbuezd+v-d13a2aa107234ea1b370a83070db65f5.jpg?_hv=2&w=900"
    },
    {
        product: "Nike Stephen Curry Jersey",
        description: "White/Golden State Warriors",
        price: 120,
        stock: 94,
        brand: "nike",
        category: "jersey",
        product_num: 8,
        image: "https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-nike-icon-authentic-jersey-stephen-curry-mens_ss4_p-11891781+u-jusr35cbamj0sc8zfj07+v-3f0a12afa9b544b5b01034d51120d82f.jpg?_hv=2"
    },
    {
        product: "Nike Giannis Antetokounmpo Jersey",
        description: "Green/Milwaukee Bucks",
        price: 119,
        stock: 94,
        brand: "nike",
        category: "jersey",
        product_num: 9,
        image: "https://images.footballfanatics.com/milwaukee-bucks/milwaukee-bucks-nike-icon-swingman-jersey-giannis-antetokounmpo-mens_ss4_p-12020943+u-eob4n0vctmixxvwn2vub+v-f132e6a590304fcf9847b75b3303b418.jpg?_hv=2&w=900"
    },
    {
        product: "Nike Mbappe Home Jersey",
        description: "Paris Saint-Germain Match Home",
        price: 130,
        stock: 94,
        brand: "nike",
        category: "jersey",
        product_num: 10,
        image: "https://media.kohlsimg.com/is/image/kohls/6012313?wid=600&hei=600&op_sharpen=1"
    },
    {
        product: "Al-Nassr Ronaldo Home Jersey",
        description: "Official 2023 Al-Nassr",
        price: 105,
        stock: 94,
        brand: "al-nassr",
        category: "jersey",
        product_num: 11,
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/13113192/3409434267.jpg"
    },
    {
        product: "Adidas Messi Home Jersey",
        description: "Argentina WC 2022-2023",
        price: 110,
        stock: 94,
        brand: "adidas",
        category: "jersey",
        product_num: 12,
        image: "https://dks.scene7.com/is/image/GolfGalaxy/22ADIMWSRG223STRRSCRA?qlt=70&wid=600&fmt=pjpeg"
    },
    {
        product: "Nishiki Pueblo 26 Mountain Bike",
        description: "Cyan/Black",
        price: 299,
        stock: 94,
        brand: "nishiki",
        category: "other",
        product_num: 13,
        image: "https://www.bikeride.com/images/bike/Mens-Pueblo.jpg"
    },
    {
        product: "Everlast Pro Style Boxing Training Gloves",
        description: "Red",
        price: 60,
        stock: 94,
        brand: "everlast",
        category: "gloves",
        product_num: 14,
        image: "https://cdn11.bigcommerce.com/s-5nfcahck7c/images/stencil/1280x1280/products/2431/7329/apiq5lmuq__93597.1608673697.jpg?c=2"
    },
    {
        product: "Nike Vapor Jet 7.0 Football Gloves",
        description: "White/Red",
        price: 40,
        stock: 94,
        brand: "nike",
        category: "gloves",
        product_num: 15,
        image: "https://static.nike.com/a/images/t_default/56a195f5-0c14-4c63-b59e-c456e80f766d/vapor-jet-7-football-gloves-1-pair-C04SdP.png"
    },
    {
        product: "Nike Jordan Basketball Arm Shooter Sleeve",
        description: "Black",
        price: 24,
        stock: 94,
        brand: "nike",
        category: "other",
        product_num: 16,
        image: "https://static.nike.com/a/images/t_default/rjkurfez3554tzyonnbn/jordan-basketball-shooter-sleeves-6LM5Hz.png"
    },
    {
        product: "Adidas Elite Volleyball Knee Pads",
        description: "White/Black",
        price: 30,
        stock: 94,
        brand: "adidas",
        category: "other",
        product_num: 17,
        image: "https://i5.walmartimages.com/asr/f38c489f-c821-41ec-918a-e5a9bd3b75b7_1.d4d7d70b6302434f2b46ab479fb50ac2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
        product: "Babolat Drive Max 110 Tennis Racquet",
        description: "Blue/Black",
        price: 100,
        stock: 94,
        brand: "babolat",
        category: "other",
        product_num: 18,
        image: "https://th.bing.com/th?id=OP.174CC0AO9HKAzQ474C474&o=5&pid=21.1"
    }
];

// Checks if the user's data exists. Loads from const saveDataKey.
const saveDataKey = "MY-PAGE-INVE-1";
const loadData = localStorage.getItem(saveDataKey);
if (loadData !== null) {
    defaultData = JSON.parse(loadData);
}

function Landing(): JSX.Element {
    const [isclick, setclick] = useState(false);
    const [display, setDisplay] = useState<{
        Product: string;
        Description: string;
        Price: number;
        Image: string;
    }>({ Product: "", Description: "", Price: 0, Image: "" });
    function updateProduct(
        product: string,
        description: string,
        price: number,
        image: string
    ) {
        setclick(!isclick);
        setDisplay({
            Product: product,
            Description: description,
            Price: price,
            Image: image
        });
    }

    //
    return (
        <div>
            <h1 className="landing-title">Shop All</h1>
            <Section className="products">
                {defaultData.map((product) => (
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
                                    onClick={() =>
                                        updateProduct(
                                            product.product,
                                            product.description,
                                            product.price,
                                            product.image
                                        )
                                    }
                                >
                                    BUY NOW
                                </Button>
                            </div>
                        </div>
                        <Card.Body className="card-details">
                            <Card.Text className="product-type">
                                <a>{product.product}</a>
                            </Card.Text>
                            <Card.Text className="product-price">
                                ${product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Section>
            {isclick == true ? (
                <Productview
                    name={display.Product}
                    price={"$" + display.Price}
                    imge={display.Image}
                    description={display.Description}
                />
            ) : null}
        </div>
    );
}

export default Landing;
