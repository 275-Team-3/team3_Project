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

    test("User has a 2 column layout", () => {
        const leftColumn = screen.getByTestId("leftColumn");
        expect(leftColumn).toBeInTheDocument();
        const rightColumn = screen.getByTestId("rightColumn");
        expect(rightColumn).toBeInTheDocument();
    });

    test("productView page displays correctly with passed in props", () => {
        const productName = screen.getByTestId("view Nike mercury 200");
        expect(productName).toBeInTheDocument();

        const productPrice = screen.getByTestId("view 200");
        expect(productPrice).toBeInTheDocument();

        const productImg = screen.getByTestId(
            "view https://static.nike.com/a/images/t_default/e839f55c-84d5-4030-9bcf-644e6a6463ea/revolution-6-mens-running-shoes-extra-wide-qP3nkM.png"
        );
        expect(productImg).toBeInTheDocument();

        const productDescription = screen.getByTestId("view new Nike shoes");
        expect(productDescription).toBeInTheDocument();
    });

    test("User can add to their cart and save to their cart", () => {
        const checkoutButton1 = screen.getByRole("button", {
            name: /ADD TO CART 🛒/i
        });
        fireEvent.click(checkoutButton1);
        const checkoutButton2 = screen.getByRole("button", {
            name: /Save TO CART 🛒/i
        });
        fireEvent.click(checkoutButton2);
    });
});
