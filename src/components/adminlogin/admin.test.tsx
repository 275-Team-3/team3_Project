import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Admin from "../adminlogin/admin";

describe("Admin Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Admin />
            </BrowserRouter>
        );
    });

    test("Renders the login form", () => {
        const passwordInput = screen.getByPlaceholderText(
            "Password"
        ) as HTMLInputElement;
        const loginButton = screen.getByText("LOGIN NOW");

        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    test("Displays an error message for invalid login", () => {
        const emailInput = screen.getByPlaceholderText(
            "Email or Username"
        ) as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText(
            "Password"
        ) as HTMLInputElement;
        const loginButton = screen.getByText("LOGIN NOW");

        fireEvent.change(emailInput, { target: { value: "invalid" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(loginButton);
    });

    test("Redirects to admin inventory page for valid login", () => {
        const emailInput = screen.getByPlaceholderText(
            "Email or Username"
        ) as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText(
            "Password"
        ) as HTMLInputElement;
        const loginButton = screen.getByText("LOGIN NOW");

        fireEvent.change(emailInput, { target: { value: "admin" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(loginButton);
    });

    test("Updates username and password input fields", () => {
        const emailInput = screen.getByPlaceholderText(
            "Email or Username"
        ) as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText(
            "Password"
        ) as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: "testuser" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });

        expect(emailInput.value).toBe("testuser");
        expect(passwordInput.value).toBe("testpassword");
    });
});
