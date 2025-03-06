import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => Promise.resolve(MOCK_DATA),
//     });
// });

// test("should render the body component with search button", async () => {
//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         );
//     });

//     // Assert if the search button is in the document
//     // const searchButton = screen.getByRole("button", { name: /search/i });

//     // const searchInput = screen.getByTestId("searchInput");

//     // // console.log(searchInput);

//     // fireEvent.change(searchInput, { target : {value : "pizza"}});

//     // fireEvent.click(searchButton);



//     // expect(searchButton).toBeInTheDocument();
//     // const cardsBeforeFilter =screen.getAllByTestId("restaurantCards");

//     // expect(cardsBeforeFilter.length).toBe(20);


// });
