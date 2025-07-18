import React from "react";
import { MdStarRate } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";

const RestaurantCard = (props) => {
    const { restaurantData } = props;

    // Check if restaurantData and restaurantData.info exist before destructuring
    if (!restaurantData || !restaurantData.info) {
        return <div>{restaurantData}</div>; // Fallback if data is missing
    }
    // console.log(restaurantData);

    const {
        cloudinaryImageId,
        name,
        areaName,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = restaurantData.info;

    return (
        <div className="restaurant-card">
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
                alt={name}
                className="restaurant-logo"
            />
            <div className="restaurant-details">
                <h3 className="restaurant-name">
                    {name.slice(0, 22)}
                    {name.length > 22 ? "..." : ""}
                </h3>
                <div className="esa-rating">
                    <h4 className="rating">
                        <MdStarRate className="rating-logo" />
                        <span>{avgRating}</span>
                    </h4>
                    <h4>{costForTwo}</h4>
                    <h4>{deliveryTime} mins</h4>
                </div>
                <p className="cousine">
                    {cuisines.join(", ").slice(0, 30)}
                    {cuisines.join(", ").length > 30 ? "..." : ""}
                </p>
                <p className="location">{areaName}</p>
            </div>
        </div>
    );
};

//higher order component

//input - res card => restrcard promoted

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div className="promoted-label-wrapper">
            <span className="promoted-label">Promoted</span>
            <RestaurantCard {...props}/>
            </div>
        )
    };

};

export default RestaurantCard;
