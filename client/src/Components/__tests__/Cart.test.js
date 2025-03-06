import React, { act } from "react";
import RestaurantMenu from "../RestaurantMenu"
import { render } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";

global.fetch = jest.fn(()=>
     Promise.resolve({
        json: ()=>
            Promise.resolve(MOCK_DATA),
        
    })
);

test("should load Restaurant Menu Component", async()=>{
    await act(async () =>render(<RestaurantMenu/>

    ));
})