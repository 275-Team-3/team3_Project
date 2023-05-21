import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Fullfilled } from "../orderFulfilled/orderFulfilled";

describe("Make Account Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Fullfilled />
            </BrowserRouter>
        );
    });

    test("Renders order received text.", () => {
        const order = screen.getByTestId("order_placed");
        expect(order).toBeInTheDocument();
    });
});
