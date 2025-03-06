import React, { useState } from "react";
import useRestraurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestraurantMenu(resId);

    // console.log("here");
    //  console.log(resInfo);

    const [showIndex , setShowIndex ]=useState();
 // useEffect(() => {
    //     const fetchMenu = async () => {
    //         try {
    //             const data = await fetch(
    //                 "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    //             );
    //             const json = await data.json();
    //             console.log(json);
    //             setResInfo(json?.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchMenu();
    // }, []);



    if (!resInfo) return <Shimmer />;

    // Extract restaurant info
    const { name = "Restaurant", cuisines = [] } = resInfo?.cards?.[2]?.card?.card?.info || {};

    // Extract menu categories and items
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    //  console.log(categories);

    return (
        <div className="menu">
            <h1 className="menu-name">{name}</h1>
            <h3>{cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"}</h3>
            {/* {categories.length > 0 ? (
                categories.map((category, index) => (
                    <div key={index}>
                        <h3>{category.card?.card?.title || "Category"}</h3>
                        <ul>
                            {category.card?.card?.itemCards?.map((item, idx) => (
                                <li key={`${item?.card?.info?.id || "unknown"}-${idx}`}>
                                    {item?.card?.info?.name || "Unnamed Item"} - ₹
                                    {(item?.card?.info?.price || item?.card?.info?.defaultPrice || 0) / 100}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No menu items available</p>
            )} */}
           {categories.map((category, index) => (
    <RestaurantCategory 
        key={category.card?.card?.title} 
        data={category?.card?.card} 
        isVisible={index === showIndex} 
        setShowIndex={()=> setShowIndex(index)}
        // index={index}
    />
))}


            
        </div>
    );
};

export default RestaurantMenu;
