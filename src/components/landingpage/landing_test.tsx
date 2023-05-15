import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LandingPage from "./landing";

describe("Checkout Process", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
    });
    test("Clicking first card's button, reveals its productview.", () => {
        const Button = screen.getByText("Nike mercury");
        fireEvent.click(Button);
    });
    test("Clicking second card's button, reveals its productview.", () => {
        const Button2 = screen.getByText("Nike mercury3");
        fireEvent.click(Button2);
    });
    test("User can save to cart", () => {
        const cartsave = screen.getByText("Product Image");
        fireEvent.click(cartsave);
    });
});
