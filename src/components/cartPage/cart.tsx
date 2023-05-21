/* eslint-disable no-extra-parens */
/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

let defaultData: {
    Product: string;
    Price: string;
    Photo: string;
    Amount: number;
    productTotal: number;
}[] = [];
const userCartKey = "MY-PAGE-USER-CART";
const loadData = localStorage.getItem(userCartKey);
if (loadData !== null) {
    defaultData = JSON.parse(loadData);
}

function Cart(): JSX.Element {
    // const setPath = useNavigate();
    const [cartData, setCartData] = useState<
        {
            Product: string;
            Price: string;
            Photo: string;
            Amount: number;
            productTotal: number;
        }[]
    >(defaultData);

    function handleQuantityUp(productName: string) {
        const withUpdatedAmount = cartData.map((cartItem) =>
            cartItem.Product === productName
                ? {
                      ...cartItem,
                      Amount: cartItem.Amount + 1,
                      productTotal:
                          Number(cartItem.Amount) * Number(cartItem.Price)
                  }
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
                ? {
                      ...cartItem,
                      Amount: cartItem.Amount - 1,
                      productTotal:
                          Number(cartItem.Amount) * Number(cartItem.Price)
                  }
                : { ...cartItem }
        );
        setCartData(withUpdatedAmount);
    }

    function saveCartData() {
        localStorage.setItem(userCartKey, JSON.stringify(cartData));
        // setPath("/checkout");
    }
    return (
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
                {cartData.map((item) => (
                    <tr key={item.Photo} data-testid={"row" + item.Product}>
                        <td width="40%" data-testid={"img" + item.Product}>
                            <img width="20%" src={item.Photo} />
                        </td>
                        <th scope="row">{item.Product}</th>
                        <td data-testid={"price" + item.Product}>
                            {" "}
                            {item.Price}{" "}
                        </td>
                        <td>
                            <Button
                                onClick={() => handleQuantityUp(item.Product)}
                            >
                                Add 1
                            </Button>{" "}
                            <Button
                                onClick={() => handleQuantityDown(item.Product)}
                            >
                                Remove 1
                            </Button>
                            <hr></hr>
                            {item.Amount == 0 ? (
                                <Button
                                    onClick={() =>
                                        removeFromInventory(item.Product)
                                    }
                                >
                                    Remove
                                </Button>
                            ) : null}
                            {item.Amount}
                        </td>
                        <td
                            key={item.Product}
                            data-testid={"total" + item.Product}
                        >
                            {item.Amount * Number(item.Price)}
                        </td>
                    </tr>
                ))}
                <tr key="test">
                    <td className="checkoutCart">
                        <button
                            type="button"
                            className="btn btn-light btn-lg"
                            onClick={() => saveCartData()}
                        >
                            Save Cart
                            {/* CHECKOUT 🛒 */}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Cart;
