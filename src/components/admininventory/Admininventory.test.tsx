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
        const AddtoInventory = screen.getByText("Add to Inventory");
        fireEvent.click(AddtoInventory);
    });
    test("Admin can see products", () => {
        const prod = screen.getByText("Product");
        fireEvent.click(prod);
    });
    test("Admin can save inventory", () => {
        const inventory = screen.getByText("Save new inventory");
        fireEvent.click(inventory);
    });
});
