import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Fullfilled } from "../orderFulfilled/orderFulfilled";

describe("orderFulfilled Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Fullfilled />
            </BrowserRouter>
        );
    });
    test("Only 1 h2 exist", () => {
        const heading = screen.getAllByRole("heading");
        expect(heading.length).toBe(1);
    });
    test("Only 1 div exist", () => {
        const order = screen.getByTestId("order_placed");
        expect(order).toBeInTheDocument();
    });

    test("Renders Your order has been placed, thank YOU!", () => {
        const fulfilled = screen.getByText(
            /Your order has been placed, thank YOU!/
        );
        expect(fulfilled).toBeInTheDocument();
    });
});
