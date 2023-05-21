import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "./cart";

describe("Testing Cart Component", () => {
    it("User can save to cart", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Cart />
            </BrowserRouter>
        );

        const button = getByText(/Save Cart/i);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });

    it("table columns should be Product Image, Product, Price, Quantity, Total", () => {
        render(<Cart />);
        const tableHeaders = screen.getAllByRole("columnheader", {
            name: /Product Image|Product|Price|Quantity|Total/i
        });
        expect(tableHeaders.length).toBe(5);
    });
    it("There should be 2 rows by default, 1 holding save cart button and the other a default empty row", () => {
        render(<Cart />);
        const tableRows = screen.getAllByRole("row", {});
        expect(tableRows.length).toBe(2);
    });
});

/*
const tableHeaders = screen.getAllByRole("th", {
    name: /name, email, address, phone number/i,
  });
  expect(tableHeaders.length).toBe(4);
  name: /(name|email|address|phone number)/i
*/
