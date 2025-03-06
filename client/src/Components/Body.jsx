import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRest, setRestList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestra, setFilterRestra] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const json = await response.json();

      const restaurantCards =
        json?.data?.cards?.find((card) =>
          card.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestList(restaurantCards);
      setFilterRestra(restaurantCards);
      setAllRestaurants(restaurantCards);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // **Debounced Search Effect**
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() === "") {
        setFilterRestra(allRestaurants);
      } else {
        const filtered = allRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterRestra(filtered);
      }
    }, 300); // Wait for 300ms after user stops typing

    return () => clearTimeout(timer);
  }, [searchText, allRestaurants]);

  const toggleFilter = () => {
    if (filteredRestra.length !== allRestaurants.length) {
      setFilterRestra(allRestaurants);
    } else {
      setFilterRestra(allRestaurants.filter((res) => res.info.avgRating > 4.5));
    }
  };

  const onlineStatus = useOnlineStatus();
  const { setUserInfo, loggedInUser } = useContext(UserContext);

  if (!onlineStatus) {
    return <h1>You're offline. Please check your internet connection.</h1>;
  }

  if (isLoading) return <Shimmer />;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <CiSearch className="search-icon" />
        </div>

        <button className="filter-btn" onClick={toggleFilter}>
          {filteredRestra.length !== allRestaurants.length
            ? "Show All Restaurants"
            : "Top Rated Restaurants"}
        </button>

        <div className="user-container">
          <label className="user-label">User Name: </label>
          <input
            className="user-search"
            value={loggedInUser || ""}
            placeholder="Enter your name"
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestra.length > 0 ? (
          filteredRestra.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted restaurantData={restaurant} />
              ) : (
                <RestaurantCard restaurantData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <h2>No restaurants found</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
