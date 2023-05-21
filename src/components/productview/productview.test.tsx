import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import Productview from "./productview";
import "@testing-library/jest-dom";

describe("Product view component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Productview
                    name={"Nike mercury 200"}
                    price={"200"}
                    imge={
                        "https://static.nike.com/a/images/t_default/e839f55c-84d5-4030-9bcf-644e6a6463ea/revolution-6-mens-running-shoes-extra-wide-qP3nkM.png"
                    }
                    description={"new Nike shoes"}
                />
            </BrowserRouter>
        );
    });
    test("prod name", () => {
        const cards = screen.getByTestId("view Nike mercury 200");
        expect(cards).toBeInTheDocument();
    });
    test("prod price", () => {
        const cards = screen.getByTestId("view 200");
        expect(cards).toBeInTheDocument();
    });
    test("prod img", () => {
        const cards = screen.getByTestId(
            "view https://static.nike.com/a/images/t_default/e839f55c-84d5-4030-9bcf-644e6a6463ea/revolution-6-mens-running-shoes-extra-wide-qP3nkM.png"
        );
        expect(cards).toBeInTheDocument();
    });
    test("prod desc", () => {
        const cards = screen.getByTestId("view new Nike shoes");
        expect(cards).toBeInTheDocument();
    });

    test("button options", () => {
        const checkoutButton1 = screen.getByRole("button", {
            name: /ADD TO CART 🛒/i
        });
        fireEvent.click(checkoutButton1);
        const checkoutButton2 = screen.getByRole("button", {
            name: /Save TO CART 🛒/i
        });
        fireEvent.click(checkoutButton2);
    });

    test("2 sections", () => {
        const cards = screen.getByTestId("leftColumn");
        expect(cards).toBeInTheDocument();
        const cards1 = screen.getByTestId("rightColumn");
        expect(cards1).toBeInTheDocument();
    });
});
