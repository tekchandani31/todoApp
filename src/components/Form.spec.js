import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";
import "@testing-library/jest-dom";

describe("Check status of Add Button",()=>{
    it("Should be enabled by default",()=>{
        const{ getByTestId }= render(<Form/>);
        expect(getByTestId("Add-btn")).not.toHaveAttribute("disabled");
    });
});

describe("Check Input area", () =>{
    it("Should be blank",()=>{
        const { getByTestId }= render(<Form/>);
        expect(getByTestId("input-form")).toHaveTextContent("");
    });
});