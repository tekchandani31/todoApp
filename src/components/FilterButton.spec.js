import React from "react";
import FilterButton from "./FilterButton";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Check Filter Button status", ()=>{
    it("should be enabled by default", ()=>{
        const { getByTestId } = render(<FilterButton/>);
        expect(getByTestId("filter-btns")).not.toHaveAttribute("disabled");
    });
});
