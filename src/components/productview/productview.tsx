/* eslint-disable indent */
import React from "react";
import "./productview.css";
import { useNavigate } from "react-router-dom";

interface productDetails {
    name: string;
    price: string;
    imge: string;
    description: string;
}
// const userCart: {
//     Product: string;
//     Description: string;
//     Price: string;
//     Brand: string;
//     Photo: string;
// }[] = [];

// const userCartKey = "MY-PAGE-USER-CART";

function Productview(props: productDetails): JSX.Element {
    const setPath = useNavigate();
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

                    {/* <div className="genderChoiceArea">
                        <button
                            className="btn btn-outline-primary me-3"
                            aria-pressed="true"
                        >
                            male
                        </button>

                        <button
                            className="btn btn-outline-primary"
                            aria-pressed="true"
                        >
                            Female
                        </button>
                        <Button>Male</Button>
                        <Button>Female</Button>
                    </div> */}
                    <div className="sizeOptions">
                        <p>{props.description}</p>
                        {/* <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Men shoes Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">USA</th>
                                    <td>7</td>
                                    <td>7.5</td>
                                    <td>8</td>
                                    <td>8.5</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>10.5</td>
                                </tr>
                                <tr>
                                    <th scope="row">UK</th>
                                    <td>6</td>
                                    <td>6.5</td>
                                    <td>7</td>
                                    <td>7.5</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>9.5</td>
                                </tr>
                                <tr>
                                    <th scope="row">EUR</th>
                                    <td>40</td>
                                    <td>40.5</td>
                                    <td>41</td>
                                    <td>41.5</td>
                                    <td>42.5</td>
                                    <td>44</td>
                                    <td>44.5</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
                <div className="userSelectedSize"></div>
                <div className="addcart">
                    <button
                        type="button"
                        className="btn btn-dark btn-lg"
                        onClick={() => setPath("/checkout")}
                    >
                        ADD TO CART 🛒
                    </button>
                </div>
            </div>
            {/* <h2>Product View 1</h2> */}
        </div>
    );
}

export default Productview;
