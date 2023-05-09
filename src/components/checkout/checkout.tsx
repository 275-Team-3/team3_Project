import React from "react";
function Checkout(): JSX.Element {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="sports socks"
                            ></img>
                        </td>
                        <th scope="row">Sports Socks</th>
                        <td>$12.99</td>
                        <td>1</td>
                        <td>$12.99</td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                src="https://m.media-amazon.com/images/I/91A3+NX-jkL._CR0,1171,943,943_UX256.jpg"
                                alt="t shirt"
                            ></img>
                        </td>
                        <th scope="row">Adidas T-Shirt</th>
                        <td>$24.99</td>
                        <td>2</td>
                        <td>$49.98</td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0479/0596/4199/products/1507162_6350_1-summer-walk-shorts-m-phantom-8_256x.jpg?v=1681841030"
                                alt="Shorts"
                            ></img>
                        </td>
                        <th scope="row">Champion Shorts</th>
                        <td>$19.99</td>
                        <td>3</td>
                        <td>$59.97</td>
                    </tr>
                    <div className="checkoutCart">
                        <button type="button" className="btn btn-light btn-lg">
                            CHECKOUT 🛒
                        </button>
                    </div>
                </tbody>
            </table>
        </div>
    );
}

export default Checkout;
