import React from "react";
import "./orderFulfilled.css";

export function Fullfilled(): JSX.Element {
    return (
        <div className="area" data-testid="order_placed">
            <h2> Your order has been placed, thank YOU! </h2>
        </div>
    );
}
