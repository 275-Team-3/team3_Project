/* eslint-disable indent */
import React from "react";
import "./productview.css";
import prodImage from "./nike2.jpg";

function Productview(): JSX.Element {
    return (
        <div className="Productview">
            <div className="leftColumn">
                <img src={prodImage} className="imageDimension" />
            </div>
            <div className="rightColumn">
                <div className="productNameArea">
                    <h1 className="productName">NIKE AIR ZOOM 270</h1>

                    <div className="productPriceArea">
                        <h5 className="productPrice">$70.99</h5>
                    </div>
                    <div className="sizeWord">
                        <h3>SIZES</h3>
                    </div>

                    <div className="genderChoiceArea">
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
                        {/* <Button>Male</Button>
                        <Button>Female</Button> */}
                    </div>
                    <div className="sizeOptions">
                        <table className="table">
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
                        </table>
                    </div>
                </div>
                <div className="userSelectedSize"></div>
                <div className="addcart">
                    <button type="button" className="btn btn-dark btn-lg">
                        ADD TO CART 🛒
                    </button>
                </div>
            </div>
            {/* <h2>Product View 1</h2> */}
        </div>
    );
}

export default Productview;
