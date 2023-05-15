/* eslint-disable indent */
import React, { useState } from "react";
import "./productview.css";
import { useNavigate } from "react-router-dom";

interface productDetails {
    name: string;
    price: string;
    imge: string;
    description: string;
}
let userCart: {
    Product: string;
    Price: string;
    Photo: string;
    Amount: number;
    productTotal: number;
}[] = [];

const userCartKey = "MY-PAGE-USER-CART";

const previousData = localStorage.getItem(userCartKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
    userCart = JSON.parse(previousData);
}

function Productview(props: productDetails): JSX.Element {
    const setPath = useNavigate();
    const [cartData, setCartData] = useState<
        {
            Product: string;
            Price: string;
            Photo: string;
            Amount: number;
            productTotal: number;
        }[]
    >(userCart);

    function updateCart(product: string, price: string, photo: string) {
        setCartData([
            ...cartData,
            {
                Product: product,
                Price: price,
                Photo: photo,
                Amount: 1,
                productTotal: Number(price)
            }
        ]);
        console.log(JSON.stringify(cartData));
    }
    function saveData() {
        localStorage.setItem(userCartKey, JSON.stringify(cartData));
        setPath("/Cart");
    }
    return (
        <div className="Productview">
            <div className="leftColumn">
                <img src={props.imge} className="imageDimension" />
            </div>
            <div className="rightColumn">
                <div className="productNameArea">
                    <h1 className="productName">{props.name}</h1>

                    <div className="productPriceArea">
                        <h5 className="productPrice">{props.price}</h5>
                    </div>
                    <div className="sizeWord">
                        <h3>DESCRIPTION</h3>
                    </div>
                    <div className="sizeOptions">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="userSelectedSize"></div>
                <div className="addcart">
                    <button
                        type="button"
                        className="btn btn-dark btn-lg"
                        onClick={() =>
                            updateCart(props.name, props.price, props.imge)
                        }
                    >
                        ADD TO CART 🛒
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark btn-lg"
                        onClick={() => saveData()}
                    >
                        Save TO CART 🛒
                    </button>
                </div>
            </div>
            {/* <h2>Product View 1</h2> */}
        </div>
    );
}

export default Productview;
