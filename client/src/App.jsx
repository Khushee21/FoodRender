import React, { useEffect, useState, lazy } from "react";
import Header from "./Components/Header";
import RestaurantCard from "./Components/RestaurantCard";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";


const App = () => {
  // Manage user info state
  const [userInfo, setUserInfo] = useState("Khushi");

  // Optional: If you want to initialize user info through useEffect
  useEffect(() => {
    const data = {
      name: "Khushi"
    };
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
        <RestaurantCard />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
