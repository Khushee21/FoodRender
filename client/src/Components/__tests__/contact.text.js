import React from "react";
import {render , screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("contact us test cases",()=>{

    // beforeAll(()=>{
    //     console.log("Before All");
    // })

    // beforeEach(()=>{
    //     console.log("Before each");
    // })

    // afteAll(()=>{
    //     console.log()
    // })

    test ("should load contact us component" , ()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect (heading).toBeInTheDocument();
    });
    
    test("should load button inside contact us Component",()=>{
        render(<Contact/>)
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    test("should lead input name inside contect component",()=>{
        render(<Contact/>)
    
        const inputNew = screen.getByPlaceholderText("name");
    
        expect(inputNew).toBeInTheDocument();
    })
    
    test("should lead 2 inout boxes on the contact component",()=>{
        render(<Contact/>)
    
        const inputBoxex=screen.getAllByRole("textbox");
        // console.log(inputBoxex);
        
        expect(inputBoxex.length).toBe(2);
    });
})


test ("should load contact us component" , ()=>{

    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect (heading).toBeInTheDocument();
});

test("should load button inside contact us Component",()=>{
    render(<Contact/>)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("should lead input name inside contect component",()=>{
    render(<Contact/>)

    const inputNew = screen.getByPlaceholderText("name");

    expect(inputNew).toBeInTheDocument();
})

test("should lead 2 inout boxes on the contact component",()=>{
    render(<Contact/>)

    const inputBoxex=screen.getAllByRole("textbox");
    // console.log(inputBoxex);
    
    expect(inputBoxex.length).toBe(2);
});