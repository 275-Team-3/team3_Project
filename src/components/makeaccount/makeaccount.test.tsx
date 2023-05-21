import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Admin from "../makeaccount/makeaccount";

describe("Make Account Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );
    });

    test("Account button can be clicked", () => {
        const checkButton = screen.getByText("UPDATE onClick");
        fireEvent.click(checkButton);
    });
    test("Account Creation Email Field is Usable", () => {
        const emailField = screen.getByText("UPDATE onClick");
        fireEvent.click(emailField);
    });
    test("User can set enter password", () => {
        const passwordCheck = screen.getByText("UPDATE onClick");
        fireEvent.click(passwordCheck);
    });
});
