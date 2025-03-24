import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiStar } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { IoRestaurantOutline } from "react-icons/io5";
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
    }, 300);

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
    return (
      <div className="offline-container">
        <div className="offline-content">
          <h1>Oops! You're offline</h1>
          <p>Please check your internet connection and try again</p>
          <div className="offline-icon">📶</div>
        </div>
      </div>
    );
  }

  if (isLoading) return <Shimmer />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="body-container">
      {/* Filter and Search Section */}
      <div className="filter-section">
        <div className="search-container">
          <div className="search-input-wrapper">
            <CiSearch className="search-icon" />
            <input
              type="text"
              data-testid="searchInput"
              className="search-input"
              value={searchText}
              placeholder="Search for restaurants..."
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        <div className="action-buttons">
          <button className="filter-button" onClick={toggleFilter}>
            <FiFilter className="button-icon" />
            {filteredRestra.length !== allRestaurants.length
              ? "Show All"
              : "Top Rated"}
          </button>

          <div className="user-profile">
            <label className="user-label">Welcome, </label>
            <input
              className="user-input"
              value={loggedInUser || ""}
              placeholder="Your name"
              onChange={(e) => setUserInfo(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Restaurant Listing */}
      <div className="restaurant-listing">
        {filteredRestra.length > 0 ? (
          <div className="restaurant-grid">
            {filteredRestra.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={`/restaurants/${restaurant?.info?.id}`}
                className="restaurant-link"
              >
                {restaurant.info.promoted ? (
                  <RestaurantCardPromoted restaurantData={restaurant} />
                ) : (
                  <RestaurantCard restaurantData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <IoRestaurantOutline className="no-results-icon" />
            <h2>No restaurants found</h2>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ErrorDisplay = ({ message }) => (
  <div className="error-container">
    <div className="error-content">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      <button 
        className="retry-button"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  </div>
);

export default Body;