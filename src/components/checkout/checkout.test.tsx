import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Checkout from "./checkout";

describe("Checkout Process", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Checkout />
            </BrowserRouter>
        );
    });

    test("Left column: User has cart section available (Order Summary, Cart Component, and Total)", () => {
        const tableHeaders = screen.getAllByRole("columnheader", {
            name: /Product Image|Product|Price|Quantity|Total/i
        });
        expect(tableHeaders.length).toBe(5);
        // order summary text
        expect(screen.getByText(/Order Summary/i)).toBeInTheDocument();
        // default Total order amount should be 0, as user has nothing in their cart
        expect(screen.getByText(/TOTAL AMOUNT DUE 0/i)).toBeInTheDocument();
    });

    test("Right Column: User has form to input payment information", () => {
        const cardNumber = screen.getByPlaceholderText(
            "Card Number"
        ) as HTMLInputElement;
        const cardPin = screen.getByPlaceholderText(
            "3 digit pin"
        ) as HTMLInputElement;
        expect(cardNumber).toBeInTheDocument();
        expect(cardPin).toBeInTheDocument();
    });

    test("Editing the Card Number and 3 digit pin renders Fullfill button", () => {
        const cardNumber = screen.getByPlaceholderText(
            "Card Number"
        ) as HTMLInputElement;
        const cardPin = screen.getByPlaceholderText(
            "3 digit pin"
        ) as HTMLInputElement;
        fireEvent.change(cardNumber, { target: { value: "278945678" } });
        fireEvent.change(cardPin, { target: { value: "007" } });
        expect(screen.getByText(/Fullfill/i)).toBeInTheDocument();
        const checkoutButton = screen.getByRole("button", {
            name: /Fullfill/i
        });
        fireEvent.click(checkoutButton);
    });
});
