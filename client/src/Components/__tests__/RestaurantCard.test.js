import React from "react";
import {render , screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCart with props Data", () => {
    render(<RestaurantCard restaurantData={MOCK_DATA}/>);

    const name = screen.getByText(/LeanCrust Pizza/i);

    expect(name).toBeInTheDocument();
});

// test("should render reataurant card with promoted label",()=>{
//     render(<RestaurantCard restaurantData={MOCK_DATA}/>);

//     const label=screen.getByText(/Promoted/i);
//     expect(label).toBeInTheDocument();
// }