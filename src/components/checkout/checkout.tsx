import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Productview from "../productview/productview";

let defaultData: {
    Product: string;
    Price: string;
    Photo: string;
    Amount: number;
}[] = [];
const userCartKey = "MY-PAGE-USER-CART";
const loadData = localStorage.getItem(userCartKey);
if (loadData !== null) {
    defaultData = JSON.parse(loadData);
}

function Checkout(): JSX.Element {
    const [quantity, setQuantity] = useState(1);
    const [cartData, setCartData] = useState<
        {
            Product: string;
            Price: string;
            Photo: string;
            Amount: number;
        }[]
    >(defaultData);

    function handleQuantityUp(productName: string) {
        const withUpdatedAmount = cartData.map((cartItem) =>
            cartItem.Product === productName
                ? { ...cartItem, Amount: cartItem.Amount + 1 }
                : { ...cartItem }
        );
        setCartData(withUpdatedAmount);
    }

    function removeFromInventory(productName: string) {
        const copiedData = [...cartData];
        const dataWithRemovedItem = copiedData.filter(
            (item): boolean => item.Product != productName
        );
        setCartData(dataWithRemovedItem);
    }
    function handleQuantityDown(productName: string) {
        const withUpdatedAmount = cartData.map((cartItem) =>
            cartItem.Product === productName && cartItem.Amount - 1 >= 0
                ? { ...cartItem, Amount: cartItem.Amount - 1 }
                : { ...cartItem }
        );
        setCartData(withUpdatedAmount);
    }
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
                    {cartData.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <img src={item.Photo} />
                            </td>
                            <th scope="row">{item.Product}</th>
                            <td>{item.Price}</td>
                            <td>
                                <Button
                                    onClick={() =>
                                        handleQuantityUp(item.Product)
                                    }
                                >
                                    Add 1
                                </Button>{" "}
                                <Button
                                    onClick={() =>
                                        handleQuantityDown(item.Product)
                                    }
                                >
                                    Remove 1
                                </Button>
                                <hr></hr>
                                {quantity == 0 ? (
                                    <Button
                                        onClick={() =>
                                            removeFromInventory(item.Product)
                                        }
                                    >
                                        Remove
                                    </Button>
                                ) : null}
                                <div> {item.Amount}</div>
                            </td>
                            <td key={item.Product}>
                                {item.Amount * Number(item.Price)}
                            </td>
                        </tr>
                    ))}
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
