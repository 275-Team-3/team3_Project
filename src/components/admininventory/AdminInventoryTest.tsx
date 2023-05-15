import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AdminInventory from "./admininventory";

describe("Checkout Process", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <AdminInventory />
            </BrowserRouter>
        );
    });
    test("Admin can add products", () => {
        const addProductButton = screen.getByText("Add Product");
        fireEvent.click(addProductButton);
    });
    test("Admin can remove products", () => {
        const removeProductButton = screen.getByText("Remove Product");
        fireEvent.click(removeProductButton);
    });
});
