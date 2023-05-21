import React from "react";
import { render, screen } from "@testing-library/react";
// import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import userEvent from "@testing-library/user-event";
describe("NavBar component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
    });
    test("There is only 1 navigation menu displayed", () => {
        const options = screen.getAllByTestId("NavMenu");
        expect(options.length).toBe(1);
    });
    test("User should have exactly 7 navigation options", () => {
        const navBarOptions = screen.getAllByRole("nav");
        expect(navBarOptions.length).toBe(7);
    });
    test("User is able to click all 7 navigation options on navbar", () => {
        userEvent.click(screen.getByTestId("LoginNav"));
        userEvent.click(screen.getByTestId("LandingNav"));
        userEvent.click(screen.getByTestId("AccountNav"));
        userEvent.click(screen.getByTestId("CartNav"));
        userEvent.click(screen.getByTestId("CheckoutNav"));
        userEvent.click(screen.getByTestId("AdminNav"));
        userEvent.click(screen.getByTestId("AdminInvNav"));
    });
});
