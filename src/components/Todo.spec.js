import React from "react";
import Todo from "./Todo";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("check rendering of ViewTemplate ", ()=>{
    it("Edit button should be enabled by default", ()=>{
        const {getByTestId} = render(< Todo />);
        expect(getByTestId("edit-btn")).not.toHaveAttribute("disabled");
    });
    it("Delete button should be enabled by default", ()=>{
        const {getByTestId} = render(< Todo />);
        expect(getByTestId("delete-btn")).not.toHaveAttribute("disabled");
    });
});

describe("check After clicking on Edit button",()=>{
    it("Input field should be blank",()=>{
        const { getByTestId }= render(<Todo/>);
        fireEvent.click(getByTestId("edit-btn"));
        expect(getByTestId("input-new-activity")).toHaveTextContent("");
    })
    it("Cancel Button should be enabled",()=>{
        const {getByTestId} = render(< Todo />);
        fireEvent.click(getByTestId("edit-btn"));
        expect(getByTestId("cancel-btn")).not.toHaveAttribute("disabled");
    });
    it("Save Button should be enabled",()=>{
        const {getByTestId} = render(< Todo />);
        fireEvent.click(getByTestId("edit-btn"));
        expect(getByTestId("save-btn")).not.toHaveAttribute("disabled");
    });
});