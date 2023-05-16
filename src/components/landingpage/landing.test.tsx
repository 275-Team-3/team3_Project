import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LandingPage from "./landing";
import ProductView from "../productview/productview";

describe("Checkout Process", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <LandingPage />
            </BrowserRouter>
        );
    });
    test("Renders second card.", () => {
        const cards = screen.getByTestId("cardNike mercury3");
        expect(cards).toBeInTheDocument();
    });
    test("Renders second overlay when hovering over card.", () => {
        const overlay = screen.getByTestId("overlayNike mercury3");
        fireEvent.mouseOver(overlay);
        expect(overlay).toBeInTheDocument();
    });
    test("Renders second ProductView when button is clicked.", () => {
        const button = screen.getByTestId("buy-btnNike mercury3");
        fireEvent.click(button);
        const pview = screen.getByTestId("pviewNike mercury3");
        expect(pview).toBeInTheDocument();
    });
});
