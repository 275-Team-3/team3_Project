import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
// import { createMemoryHistory } from "history";
import { BrowserRouter, Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import UserIcon from "./userIcon";
describe("userIcon", () => {
    let mathRandomFunction: jest.SpyInstance;
    beforeEach(() => {
        mathRandomFunction = jest
            .spyOn(global.Math, "random")
            .mockReturnValue(0.5) // 4
            .mockReturnValueOnce(0.99) // 6
            .mockReturnValueOnce(0.75) // 5
            .mockReturnValueOnce(0.1); // 1
    });
    afterEach(() => {
        jest.spyOn(global.Math, "random").mockRestore();
    });
    test("Area exist for userIcon to display", () => {
        render(<UserIcon />);
        const iconExist = screen.getByTestId("userImage");
        expect(iconExist).toBeInTheDocument;
    });
    test("Rendering UserIcon component renders mathrandom function to execute that makes new icon", () => {
        render(<UserIcon />);
        expect(mathRandomFunction).toBeCalledTimes(1);
    });

    test("Charecter icons arn't broken when UserIcon component rendered over 100 times (user refreshing page 100 times)", () => {
        for (let i = 0; i < 100; i++) {
            render(<UserIcon />);
        }
        expect(mathRandomFunction).toBeCalledTimes(100);
    });
});
